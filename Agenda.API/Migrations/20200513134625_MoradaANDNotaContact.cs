using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class MoradaANDNotaContact : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.AddColumn<string>(
                name: "MoradaContacto",
                table: "contacts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NotaContacto",
                table: "contacts",
                nullable: true);    
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contacts",
                table: "Contacts",
                column: "IdContact");

            migrationBuilder.AddForeignKey(
                name: "FK_Fotos_Contacts_ContactIdContact",
                table: "Fotos",
                column: "ContactIdContact",
                principalTable: "Contacts",
                principalColumn: "IdContact",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
