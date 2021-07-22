using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class ads : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdsSection_ImageAssets_ImageId",
                table: "AdsSection");

            migrationBuilder.AlterColumn<int>(
                name: "ImageId",
                table: "AdsSection",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DisplayOrder",
                table: "AdsSection",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_AdsSection_ImageAssets_ImageId",
                table: "AdsSection",
                column: "ImageId",
                principalTable: "ImageAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdsSection_ImageAssets_ImageId",
                table: "AdsSection");

            migrationBuilder.DropColumn(
                name: "DisplayOrder",
                table: "AdsSection");

            migrationBuilder.AlterColumn<int>(
                name: "ImageId",
                table: "AdsSection",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_AdsSection_ImageAssets_ImageId",
                table: "AdsSection",
                column: "ImageId",
                principalTable: "ImageAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
