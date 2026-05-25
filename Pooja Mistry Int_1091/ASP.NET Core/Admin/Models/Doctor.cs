using Microsoft.EntityFrameworkCore;

namespace Admin.Models
{
    public class Doctor
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public int Salary { get; set; }
    }
}
