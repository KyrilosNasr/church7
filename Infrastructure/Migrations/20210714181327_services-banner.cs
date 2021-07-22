using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class servicesbanner : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BannerImgUrl",
                table: "ChurchServices");

            migrationBuilder.AddColumn<int>(
                name: "BannerId",
                table: "ChurchServices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ChurchServices_BannerId",
                table: "ChurchServices",
                column: "BannerId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChurchServices_ImageAssets_BannerId",
                table: "ChurchServices",
                column: "BannerId",
                principalTable: "ImageAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChurchServices_ImageAssets_BannerId",
                table: "ChurchServices");

            migrationBuilder.DropIndex(
                name: "IX_ChurchServices_BannerId",
                table: "ChurchServices");

            migrationBuilder.DropColumn(
                name: "BannerId",
                table: "ChurchServices");

            migrationBuilder.AddColumn<string>(
                name: "BannerImgUrl",
                table: "ChurchServices",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
