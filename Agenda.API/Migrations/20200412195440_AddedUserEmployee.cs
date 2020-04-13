using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class AddedUserEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    IdEmp = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UsernameEmp = table.Column<string>(nullable: true),
                    PasswordEmp = table.Column<string>(nullable: true),
                    PasswordHashEmp = table.Column<byte[]>(nullable: true),
                    PasswordSaltEmp = table.Column<byte[]>(nullable: true),
                    ContactNumEmp = table.Column<int>(nullable: false),
                    EmailEmp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.IdEmp);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
