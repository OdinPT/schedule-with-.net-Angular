using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 6, ErrorMessage = "Password deve ter entre 6 e 16 caracteres")]
        public string Password { get; set; }
        public string Email { get; set; }

        public string Number { get; set; }
    }
}
