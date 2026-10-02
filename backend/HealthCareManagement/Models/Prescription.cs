namespace HealthCareManagement.Models
{
    public class Prescription
    {
        public int PrescriptionId { get; set; }

        public string MedicineName { get; set; } = string.Empty;

        public string Dosage { get; set; } = string.Empty;

        public string Duration { get; set; } = string.Empty;

        public string Instruction { get; set; } = string.Empty;



        public int AppointmentId { get; set; }

        public Appointment ? Appointment { get; set; }
    }
}
