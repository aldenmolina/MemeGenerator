using Microsoft.EntityFrameworkCore.Migrations;

namespace MemeGenerator.Migrations
{
    public partial class imgpaths : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Memes",
                keyColumn: "MemeId",
                keyValue: 1,
                column: "imagePath",
                value: "/Images/Batman.jpg");

            migrationBuilder.UpdateData(
                table: "Memes",
                keyColumn: "MemeId",
                keyValue: 2,
                column: "imagePath",
                value: "/Images/Spiderman.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Memes",
                keyColumn: "MemeId",
                keyValue: 1,
                column: "imagePath",
                value: "");

            migrationBuilder.UpdateData(
                table: "Memes",
                keyColumn: "MemeId",
                keyValue: 2,
                column: "imagePath",
                value: "");
        }
    }
}
