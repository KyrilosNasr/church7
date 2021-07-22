using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class galleryimageid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GalleryImages_ImageAssets_ImageId",
                table: "GalleryImages");

            migrationBuilder.AlterColumn<int>(
                name: "ImageId",
                table: "GalleryImages",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_GalleryImages_ImageAssets_ImageId",
                table: "GalleryImages",
                column: "ImageId",
                principalTable: "ImageAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GalleryImages_ImageAssets_ImageId",
                table: "GalleryImages");

            migrationBuilder.AlterColumn<int>(
                name: "ImageId",
                table: "GalleryImages",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_GalleryImages_ImageAssets_ImageId",
                table: "GalleryImages",
                column: "ImageId",
                principalTable: "ImageAssets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
