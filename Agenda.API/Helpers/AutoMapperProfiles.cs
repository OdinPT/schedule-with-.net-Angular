using Agenda.APi.Dtos;
using Agenda.APi.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Contact, ContactForListDto>();
            CreateMap<Contact, ContactForDetailedDto>();

            CreateMap<ContactToUpdateDto, Contact>();

            CreateMap<ContactForListDto, Contact>();

            CreateMap <Contact, ContactForListDto>();
            CreateMap<Nota, NotasForListDTO>();
            



        }
    }
}
