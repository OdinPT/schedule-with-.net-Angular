using Agenda.APi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Dtos
{
    public class NotaForDetailedDto
    {
        public int IdNota { get; set; }
        public string TituloNota { get; set; }

        public string DescNota { get; set; }
        public int Id_Func { get; set; }

        public ICollection<Foto> Photos { get; set; }
    }
}
