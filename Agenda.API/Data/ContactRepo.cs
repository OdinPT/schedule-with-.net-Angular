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
    public class ContactRepo : IContactRepo

    {
        private readonly DataContext _context;

        public ContactRepo(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {

            _context.Remove(entity);
            _context.SaveChanges();
        }
        public async Task<Contact> RegisterContact(Contact con, string NomeContact, string EmailContact, string NumeroContact,
          int IdEmployee, string DataAniversarioContact)
        {

            con.NomeContact = NomeContact;
            con.EmailContact = EmailContact;
            con.NumeroContact = NumeroContact;
            con.IdEmployee = IdEmployee;
            con.DataAniversarioContact = DataAniversarioContact;


            await _context.contacts.AddAsync(con);
            await _context.SaveChangesAsync();

            return con;
        }

        public async Task<Contact> GetContact(int id)
        {

            var contact = await _context.contacts.Include(p => p.Photos).FirstOrDefaultAsync(u => u.IdContact == id);
            return contact;
        }
      

      
        public async Task<IEnumerable<Contact>> Getcontacts()
        {
            var users = await _context.contacts.Include(p => p.Photos).ToListAsync();
            return users;
        }
       

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}