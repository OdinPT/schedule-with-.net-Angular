using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Models
{
    public class Employee
    {
        [Key]
        public int IdEmp { get; set; }
        public string UsernameEmp { get; set; }

        public string PasswordEmp { get; set; }
        public byte[] PasswordHashEmp { get; set; }
        public byte[] PasswordSaltEmp { get; set; }
        public string ContactNumEmp { get; set; }

        public string EmailEmp { get; set; }
    }
}
