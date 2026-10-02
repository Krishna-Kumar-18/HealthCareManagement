namespace HealthCareManagement.Models
{
    public class Doctor
    {
        public int DoctorId { get; set; }

        public string Specialization { get; set; } = string.Empty;

        public int Experience { get; set; }




        public int UserId { get; set; }

        public User ? User { get; set; }


        public int DepartmentId { get; set; }

        public Department ? Department { get; set; }




        public ICollection<Appointment> ? Appointments { get; set; }
    }
}
