using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class ContactsAndFotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    NomeContact = table.Column<string>(nullable: true),
                    IdContact = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    EmailContact = table.Column<string>(nullable: true),
                    NumeroContact = table.Column<int>(nullable: false),
                    IdEmployee = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.IdContact);
                });

            migrationBuilder.CreateTable(
                name: "Fotos",
                columns: table => new
                {
                    IdFoto = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UrlFoto = table.Column<string>(nullable: true),
                    DescFoto = table.Column<string>(nullable: true),
                    DataDownFoto = table.Column<DateTime>(nullable: false),
                    IsMain = table.Column<int>(nullable: false),
                    EmployeeId = table.Column<int>(nullable: false),
                    PublicId = table.Column<string>(nullable: true),
                    ContactIdContact = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fotos", x => x.IdFoto);
                    table.ForeignKey(
                        name: "FK_Fotos_Contacts_ContactIdContact",
                        column: x => x.ContactIdContact,
                        principalTable: "Contacts",
                        principalColumn: "IdContact",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fotos_ContactIdContact",
                table: "Fotos",
                column: "ContactIdContact");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fotos");

            migrationBuilder.DropTable(
                name: "Contacts");

           
        }
    }
}
