using Agenda.APi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Dtos
{
    public class ContactForListDto
    {
        public int IdContact { get; set; }
        public string NomeContact { get; set; }
        public string EmailContact { get; set; }
        public string NumeroContact { get; set; }
        public string IdEmployee { get; set; }
        public string DataAniversarioContact { get; set; }
        public string PhotosUrl { get; set; }
    }
}
 