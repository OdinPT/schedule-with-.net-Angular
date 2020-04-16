using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Models
{
    public class Foto
    {
        [Key]
        public int IdFoto { get; set; }
        public string UrlFoto { get; set; }
        public string DescFoto { get; set; }
        public DateTime DataDownFoto { get; set; }

        public int IsMain { get; set; }
        public int EmployeeId { get; set; }
        public string PublicId { get; set; }

    }
}
