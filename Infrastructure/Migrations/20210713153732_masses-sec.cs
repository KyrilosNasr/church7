using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class massessec : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Masses_MassSection_MassSectionId",
                table: "Masses");

            migrationBuilder.AlterColumn<int>(
                name: "MassSectionId",
                table: "Masses",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Masses_MassSection_MassSectionId",
                table: "Masses",
                column: "MassSectionId",
                principalTable: "MassSection",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Masses_MassSection_MassSectionId",
                table: "Masses");

            migrationBuilder.AlterColumn<int>(
                name: "MassSectionId",
                table: "Masses",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Masses_MassSection_MassSectionId",
                table: "Masses",
                column: "MassSectionId",
                principalTable: "MassSection",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
