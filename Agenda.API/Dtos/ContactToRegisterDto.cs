using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Dtos
{
    public class ContactToRegisterDto
    {
        public int IdContact { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "Nome deve ter entre 3 e 20 caracteres")]
        public string NomeContact { get; set; }
        [Required]
        public string EmailContact { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 9, ErrorMessage = "Número deve conter entre 9 a 12 contactos")] 
        public string NumeroContact { get; set; }
        public int IdEmployee { get; set; }
        public string DataAniversarioContact { get; set; }
    }
}
