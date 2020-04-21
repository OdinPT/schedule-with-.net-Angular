using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Models
{
    public class Contact
    {
        [Key]
        public int IdContact { get; set; }
        public string NomeContact { get; set; }
        public string EmailContact { get; set; }
        public string NumeroContact { get; set; }
        public int IdEmployee { get; set; }

        public string DataAniversarioContact { get; set; }

        public ICollection<Foto> Photos { get; set; }

    }
}
