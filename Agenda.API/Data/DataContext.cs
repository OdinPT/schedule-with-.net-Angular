using Agenda.APi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agenda.APi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base (options) {}

        public DbSet<Value> values { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Contact> contacts { get; set; }

        public DbSet<Foto> Fotos { get; set; }
    }
}
