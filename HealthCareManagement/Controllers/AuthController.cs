using BCrypt.Net;
using HealthCareManagement.Data;
using HealthCareManagement.DTOs.AuthDTO;
using HealthCareManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace HealthCareManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _dbcontext;


        public AuthController(AppDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }



        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDTO registerDto)
        {
            var existingUser = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Email == registerDto.Email);

            if(existingUser != null)
            {
                return BadRequest("Email Already Registered.");
            }

            var role = await _dbcontext.Roles.FirstOrDefaultAsync(r => r.RoleName == registerDto.RoleName);

            if(role == null)
            {
                return BadRequest("Invalid role");
            }

            var roleName = role.RoleName.ToLower();

            Department ? department = null;
            if (roleName == "doctor")
            {
                if (string.IsNullOrWhiteSpace(registerDto.DepartmentName) || string.IsNullOrWhiteSpace(registerDto.Specialization) || registerDto.Experience == null)
                {
                    return BadRequest("DepartmentId, Speciality and Experience are required for a doctor.");
                }

                department = await _dbcontext.Departments.FirstOrDefaultAsync(d => d.DepartmentName == registerDto.DepartmentName);

                if(department == null)
                {
                    return BadRequest($"Department '{registerDto.DepartmentName}' does not exist");
                }
            }

            if(roleName == "patient")
            {
                if (string.IsNullOrWhiteSpace(registerDto.Gender) || string.IsNullOrWhiteSpace(registerDto.PhoneNumber) || registerDto.DateOfBirth == null)
                {
                    return BadRequest("Gender, Phone Number and Date Of Birth are required for a patient.");
                }
            }


            var user = new User
            {
                Username = registerDto.Name,
                Email = registerDto.Email,
                HashedPassword = HashedPassword(registerDto.Password),
                CreatedAt = DateTime.Now,
                RoleId = role.RoleId,
            };


            await _dbcontext.Users.AddAsync(user);



            if(roleName == "doctor")
            {
                var doctor = new Doctor
                {
                    Specialization = registerDto.Specialization,
                    Experience = registerDto.Experience!.Value,
                    User = user,
                    DepartmentId = department!.DepartmentId
                };

                await _dbcontext.Doctors.AddAsync(doctor);
            }


            if(roleName == "patient")
            {
                var patient = new Patient 
                { 
                    DateOfBirth = registerDto.DateOfBirth!.Value,
                    Gender = registerDto.Gender,
                    PhoneNumber = registerDto.PhoneNumber,
                    User = user
                };

                await _dbcontext.Patients.AddAsync(patient);
            }


            await _dbcontext.SaveChangesAsync();


            return Ok(new
            {
                Message = "Registered Successfully",
                UserId = user.UserId,
                Username = user.Username,
                Email = user.Email,
                Role = role.RoleName
            });

        }



        [HttpPost("login")]
        public  async Task<ActionResult> Login(LoginDTO loginDto)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if(user == null)
            {
                return BadRequest("Invalid email or password");
            }

            if(!VerifyPassword(loginDto.Password, user.HashedPassword))
            {
                return BadRequest("Invalid email or password");
            }

            return Ok("Login successfully");
        }


        private string HashedPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }


        private bool VerifyPassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
