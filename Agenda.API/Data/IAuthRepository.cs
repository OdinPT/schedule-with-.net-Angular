using Agenda.APi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Data
{
    public interface IAuthRepository
    {
        Task<Employee> Register(Employee user, string Password, string email, string number);
        
        Task<Employee> Login(string username, string Password);
        Task<bool> UserExists(string username);

    }
}
