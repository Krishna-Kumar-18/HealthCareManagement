namespace HealthCareManagement.Models
{
    public class Appointment
    {
        public int AppointmentId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string Status { get; set; } = string.Empty;

        public string Reason { get; set; } = string.Empty;



        public int PatientId { get; set; }

        public Patient ? Patient { get; set; }




        public int DoctorId { get; set; }

        public Doctor ? Doctor { get; set; }



        public ICollection<Prescription> ? Prescriptions { get; set; }

    }
}
