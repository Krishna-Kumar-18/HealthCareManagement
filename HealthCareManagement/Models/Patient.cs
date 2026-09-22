namespace HealthCareManagement.Models
{
    public class Patient
    {
        public int PatientId { get; set; }

        public string DateOfBirth { get; set; } = string.Empty;

        public string Gender { get; set; } = string.Empty;

        public string PhoneNumber { get; set; } = string.Empty;



        public int UserId { get; set; }

        public User ? User { get; set; }





        public ICollection<Appointment> ? Appointments { get; set; }
    }
}
