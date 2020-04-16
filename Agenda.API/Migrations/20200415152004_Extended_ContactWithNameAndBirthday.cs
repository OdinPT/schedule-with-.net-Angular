using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class Extended_ContactWithNameAndBirthday : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DataAniversarioContact",
                table: "Contacts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomeContact",
                table: "Contacts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataAniversarioContact",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "NomeContact",
                table: "Contacts");
        }
    }
}
