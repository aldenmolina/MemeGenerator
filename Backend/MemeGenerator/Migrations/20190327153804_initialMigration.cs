using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MemeGenerator.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Memes",
                columns: table => new
                {
                    MemeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    imagePath = table.Column<string>(nullable: true),
                    topText = table.Column<string>(nullable: true),
                    bottomText = table.Column<string>(nullable: true),
                    topTextX = table.Column<int>(nullable: false),
                    topTextY = table.Column<int>(nullable: false),
                    bottomTextX = table.Column<int>(nullable: false),
                    bottomTextY = table.Column<int>(nullable: false),
                    fontSize = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Memes", x => x.MemeId);
                });

            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "MemeId", "bottomText", "bottomTextX", "bottomTextY", "fontSize", "imagePath", "topText", "topTextX", "topTextY" },
                values: new object[] { 1, "Peace", 0, 0, 38, "", "Howdy", 0, 0 });

            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "MemeId", "bottomText", "bottomTextX", "bottomTextY", "fontSize", "imagePath", "topText", "topTextX", "topTextY" },
                values: new object[] { 2, "Ciao", 0, 0, 38, "", "Hola", 0, 0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Memes");
        }
    }
}
