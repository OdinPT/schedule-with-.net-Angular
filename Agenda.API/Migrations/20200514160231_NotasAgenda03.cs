using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class NotasAgenda03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    IdNota = table.Column<string>(nullable: true)
                        .Annotation("Sqlite:Autoincrement", true),
                    TituloNota = table.Column<string>(nullable: true),
                    DescNota = table.Column<string>(nullable: false),
                    Id_Func = table.Column<int>(nullable: false)
                });
        }
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}

