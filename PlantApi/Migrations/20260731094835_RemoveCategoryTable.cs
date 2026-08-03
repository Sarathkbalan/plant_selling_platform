using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantApi.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCategoryTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plants_Categories_CategoryId",
                table: "Plants");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Plants",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "CategoryName",
                table: "Plants",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Plants_Categories_CategoryId",
                table: "Plants",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plants_Categories_CategoryId",
                table: "Plants");

            migrationBuilder.DropColumn(
                name: "CategoryName",
                table: "Plants");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Plants",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Plants_Categories_CategoryId",
                table: "Plants",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
