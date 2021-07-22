using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum RolesEnum
    {
        [EnumMember(Value = "Admin")]
        Admin,

        [EnumMember(Value = "User")]
        User,
    }
}