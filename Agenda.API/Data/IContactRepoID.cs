using Agenda.APi.Dtos;
using Agenda.APi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Data
{
    public interface IContactRepoID
    {
    
        Task<Contact> GetContact(int id);

      

    }
}
