using Microsoft.EntityFrameworkCore.Migrations;

namespace agendaApp.API.Migrations
{
    public partial class typeContacts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TypeContacts",
                columns: table => new
                {
                    IdType = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DescType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeContacts", x => x.IdType);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TypeContacts");
        }
    }
}
