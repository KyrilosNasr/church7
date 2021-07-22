using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class gallery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fathers_FathersSections_fathersSectionId",
                table: "Fathers");

            migrationBuilder.RenameColumn(
                name: "fathersSectionId",
                table: "Fathers",
                newName: "FathersSectionId");

            migrationBuilder.RenameIndex(
                name: "IX_Fathers_fathersSectionId",
                table: "Fathers",
                newName: "IX_Fathers_FathersSectionId");

            migrationBuilder.CreateTable(
                name: "AdsSection",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdsSection", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdsSection_ImageAssets_ImageId",
                        column: x => x.ImageId,
                        principalTable: "ImageAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Gallery",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BannerId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gallery", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Gallery_ImageAssets_BannerId",
                        column: x => x.BannerId,
                        principalTable: "ImageAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GeneralSectionsBanners",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SectionName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BannerId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralSectionsBanners", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GeneralSectionsBanners_ImageAssets_BannerId",
                        column: x => x.BannerId,
                        principalTable: "ImageAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "GalleryImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GalleryId = table.Column<int>(type: "int", nullable: false),
                    ImageId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GalleryImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GalleryImages_Gallery_GalleryId",
                        column: x => x.GalleryId,
                        principalTable: "Gallery",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GalleryImages_ImageAssets_ImageId",
                        column: x => x.ImageId,
                        principalTable: "ImageAssets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdsSection_ImageId",
                table: "AdsSection",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Gallery_BannerId",
                table: "Gallery",
                column: "BannerId");

            migrationBuilder.CreateIndex(
                name: "IX_GalleryImages_GalleryId",
                table: "GalleryImages",
                column: "GalleryId");

            migrationBuilder.CreateIndex(
                name: "IX_GalleryImages_ImageId",
                table: "GalleryImages",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_GeneralSectionsBanners_BannerId",
                table: "GeneralSectionsBanners",
                column: "BannerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fathers_FathersSections_FathersSectionId",
                table: "Fathers",
                column: "FathersSectionId",
                principalTable: "FathersSections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fathers_FathersSections_FathersSectionId",
                table: "Fathers");

            migrationBuilder.DropTable(
                name: "AdsSection");

            migrationBuilder.DropTable(
                name: "GalleryImages");

            migrationBuilder.DropTable(
                name: "GeneralSectionsBanners");

            migrationBuilder.DropTable(
                name: "Gallery");

            migrationBuilder.RenameColumn(
                name: "FathersSectionId",
                table: "Fathers",
                newName: "fathersSectionId");

            migrationBuilder.RenameIndex(
                name: "IX_Fathers_FathersSectionId",
                table: "Fathers",
                newName: "IX_Fathers_fathersSectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fathers_FathersSections_fathersSectionId",
                table: "Fathers",
                column: "fathersSectionId",
                principalTable: "FathersSections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
