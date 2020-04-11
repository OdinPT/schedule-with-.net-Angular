using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace agendaApp.API.Model
{
    public class TypeContact
    {
        [Key]
        public int IdType { get; set; }
        public string DescType { get; set; }
    }
}
