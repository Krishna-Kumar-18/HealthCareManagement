using HealthCareManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthCareManagement.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<Prescription> Prescriptions { get; set; }





        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.UserId);

                entity.Property(u => u.Username)
                .IsRequired()
                .HasMaxLength(100);

                entity.Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);

                entity.Property(u => u.HashedPassword)
                .IsRequired();

                entity.Property(u => u.CreatedAt)
                .IsRequired();



                entity.HasOne(u => u.Role)
                .WithMany(u => u.Users)
                .HasForeignKey(u => u.RoleId)
                .OnDelete(DeleteBehavior.Restrict);
            });





            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(r => r.RoleId);

                entity.Property(r => r.RoleName)
                .IsRequired()
                .HasMaxLength(50);
            });






            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(d => d.DepartmentId);

                entity.Property(d => d.DepartmentName)
                .IsRequired()
                .HasMaxLength(100);

                entity.Property(d => d.Description)
                .HasMaxLength(500);
            });





            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(d => d.DoctorId);

                entity.Property(d => d.Specialization)
                .IsRequired()
                .HasMaxLength(100);

                entity.Property(d => d.Experience)
                .IsRequired();


                entity.HasOne(d => d.User)
                .WithOne(d => d.Doctor)
                .HasForeignKey<Doctor>(d => d.UserId)
                .OnDelete(DeleteBehavior.Cascade);
            



                entity.HasOne(d => d.Department)
                .WithMany(d => d.Doctors)
                .HasForeignKey(d => d.DepartmentId)
                .OnDelete(DeleteBehavior.Restrict);
            });




            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(p => p.PatientId);

                entity.Property(p => p.DateOfBirth)
                .IsRequired();

                entity.Property(p => p.Gender)
                .IsRequired()
                .HasMaxLength(20);

                entity.Property(p => p.PhoneNumber)
                .IsRequired()
                .HasMaxLength(15);



                entity.HasOne(p => p.User)
                .WithOne(p => p.Patient)
                .HasForeignKey<Patient>(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);
            });






            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.HasKey(a => a.AppointmentId);

                entity.Property(a => a.AppointmentDate)
                .IsRequired();

                entity.Property(a => a.Status)
                .IsRequired()
                .HasMaxLength(30);

                entity.Property(a => a.Reason)
                .HasMaxLength(500);



                entity.HasOne(a => a.Patient)
                .WithMany(a => a.Appointments)
                .HasForeignKey(a => a.PatientId)
                .OnDelete(DeleteBehavior.Restrict);


                entity.HasOne(a => a.Doctor)
                .WithMany(a => a.Appointments)
                .HasForeignKey(a => a.DoctorId)
                .OnDelete(DeleteBehavior.Restrict);
            });





            modelBuilder.Entity<Prescription>(entity =>
            {
                entity.HasKey(p => p.PrescriptionId);

                entity.Property(p => p.MedicineName)
                .IsRequired()
                .HasMaxLength(100);

                entity.Property(p => p.Dosage)
                .IsRequired()
                .HasMaxLength(100);

                entity.Property(p => p.Duration)
                .IsRequired()
                .HasMaxLength(50);

                entity.Property(p => p.Instruction)
                .HasMaxLength(500);



                entity.HasOne(p => p.Appointment)
                .WithMany(p => p.Prescriptions)
                .HasForeignKey(p => p.AppointmentId)
                .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
