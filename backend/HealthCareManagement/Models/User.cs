using System.Numerics;

namespace HealthCareManagement.Models
{
    public class User
    {
        public int UserId { get; set; }

        public string Username { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string HashedPassword { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; }


        public int RoleId { get; set; }

        public Role ? Role { get; set; }

        public Doctor ? Doctor { get; set; }

        public Patient ? Patient { get; set; }
    }
}
