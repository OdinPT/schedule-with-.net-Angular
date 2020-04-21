using Agenda.APi.Dtos;
using Agenda.APi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Data
{
    public class ContactRepoID : IContactRepoID

    {
        private readonly DataContext _context;

        public ContactRepoID(DataContext context)
        {
            _context = context;
        }
   
     

        public async Task<Contact> GetContact(int id)
        {

            var contact = await _context.contacts.Include(p => p.Photos).FirstOrDefaultAsync(u => u.IdContact == id);
            return contact;
        }

       

    }
}