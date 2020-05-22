using Agenda.APi.Dtos;
using Agenda.APi.Helpers;
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
        public async Task<IEnumerable<Contact>> search(string name) // find
        {
            var users = await _context.contacts.Where(u => !string.IsNullOrWhiteSpace(name) ? u.NomeContact.Contains(name.Trim()) : true).ToListAsync();
            
            await _context.SaveChangesAsync();

            return users;
        }
        public async Task<IEnumerable<Contact>> search2(string name) // find
        {
            var users = await _context.contacts.Where(u => !string.IsNullOrWhiteSpace(name) ? u.NomeContact.Contains(name.Trim()) : true).ToListAsync();

            await _context.SaveChangesAsync();

            return users;
        }

        public async Task<IEnumerable<Contact>> search4Id(int id) // find by id
        {
            var users = await _context.contacts.Where(u => u.IdEmployee == id).ToListAsync();

            await _context.SaveChangesAsync();

            return users;
        }

        public async Task<IEnumerable<Contact>> Getcontacts()
        {
            var users = await _context.contacts.Include(p => p.Photos).ToListAsync();
            return users;
        }

        public async Task<IEnumerable<Nota>> GetNotas(int id)
        {
            var users = await _context.Notacoes.Where(u => u.Id_Func == id).ToListAsync();

            await _context.SaveChangesAsync();

            return users;
        }

        public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
        }

        public  async Task<Nota> RegisterNotas(Nota con, string TituloNota, string DescNota, int Id_Func)
        {
            con.TituloNota = TituloNota;
            con.DescNota = DescNota;
            con.Id_Func = Id_Func;
            
            await _context.Notacoes.AddAsync(con);
            await _context.SaveChangesAsync();

            return con;
        }
      
        public async Task<Nota> GetNota(int id)
        {
            var users = await _context.Notacoes.Include(p => p.Photos).FirstOrDefaultAsync(u => u.IdNota == id);
          
            return users;
        }

        public async Task<IEnumerable<Nota>> searchNota(string name) // find note
        {
            var users = await _context.Notacoes.Where(u => !string.IsNullOrWhiteSpace(name) ? u.TituloNota.Contains(name.Trim()) : true).ToListAsync();

            await _context.SaveChangesAsync();

            return users;
        }

    }
}