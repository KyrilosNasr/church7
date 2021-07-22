using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class masseschange1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MassEvents_Masses_MassId",
                table: "MassEvents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MassEvents",
                table: "MassEvents");

            migrationBuilder.RenameTable(
                name: "MassEvents",
                newName: "MassEvent");

            migrationBuilder.RenameIndex(
                name: "IX_MassEvents_MassId",
                table: "MassEvent",
                newName: "IX_MassEvent_MassId");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "Masses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Masses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Masses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Masses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartTime",
                table: "Masses",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Masses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_MassEvent",
                table: "MassEvent",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MassEvent_Masses_MassId",
                table: "MassEvent",
                column: "MassId",
                principalTable: "Masses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MassEvent_Masses_MassId",
                table: "MassEvent");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MassEvent",
                table: "MassEvent");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Masses");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Masses");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Masses");

            migrationBuilder.DropColumn(
                name: "Place",
                table: "Masses");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "Masses");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Masses");

            migrationBuilder.RenameTable(
                name: "MassEvent",
                newName: "MassEvents");

            migrationBuilder.RenameIndex(
                name: "IX_MassEvent_MassId",
                table: "MassEvents",
                newName: "IX_MassEvents_MassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MassEvents",
                table: "MassEvents",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MassEvents_Masses_MassId",
                table: "MassEvents",
                column: "MassId",
                principalTable: "Masses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
