using Agenda.APi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Employee> Login(string username, string password)
        {
            var user = await _context.Employees.FirstOrDefaultAsync(x => x.UsernameEmp == username);

            if (user == null)
                return null;

            if (!VerifyPasswordHash(password, user.PasswordHashEmp, user.PasswordSaltEmp))
                return null;
            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHashEmp, byte[] passwordSaltEmp)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSaltEmp))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i=0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHashEmp[i]) return false;
                }
            }
            return true;
        }

        public async Task<Employee> Register(Employee user, string password, string email, string number)
        {
            //Insirar a password, passwordHash e a passwordSalt
            byte[] passwordHash, PasswordSalt;
            CreatePasswordHash(password, out passwordHash, out PasswordSalt);

            user.EmailEmp = email;
            user.ContactNumEmp = number;
            user.PasswordEmp = password;
            user.PasswordHashEmp = passwordHash;
            user.PasswordSaltEmp = PasswordSalt;

            await _context.Employees.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Employees.AnyAsync(x => x.UsernameEmp == username))
                return true;

            return false;
        }
    }
}
