using Microsoft.EntityFrameworkCore.Migrations;

namespace Agenda.APi.Migrations
{
    public partial class phototonotes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<int>(
                name: "NotaIdNota",
                table: "Fotos",
                nullable: true);

        
          
            migrationBuilder.CreateIndex(
                name: "IX_Fotos_NotaIdNota",
                table: "Fotos",
                column: "NotaIdNota");

          
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.DropTable(
                name: "Notacoes");

            migrationBuilder.DropIndex(
                name: "IX_Fotos_NotaIdNota",
                table: "Fotos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_contacts",
                table: "contacts");

            migrationBuilder.DropColumn(
                name: "NotaIdNota",
                table: "Fotos");

           
        }
    }
}
