using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Dtos
{
    public class NotasToRegisterDto
    {
        public int IdNota { get; set; }

        public string TituloNota { get; set; }

        public string DescNota { get; set; }
        
        public int Id_Func { get; set; }
    }
}
