using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccessLayer.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CaregoryId",
                table: "Blogs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CategoryCaregoryId",
                table: "Blogs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_CategoryCaregoryId",
                table: "Blogs",
                column: "CategoryCaregoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_Categories_CategoryCaregoryId",
                table: "Blogs",
                column: "CategoryCaregoryId",
                principalTable: "Categories",
                principalColumn: "CaregoryId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_Categories_CategoryCaregoryId",
                table: "Blogs");

            migrationBuilder.DropIndex(
                name: "IX_Blogs_CategoryCaregoryId",
                table: "Blogs");

            migrationBuilder.DropColumn(
                name: "CaregoryId",
                table: "Blogs");

            migrationBuilder.DropColumn(
                name: "CategoryCaregoryId",
                table: "Blogs");
        }
    }
}
