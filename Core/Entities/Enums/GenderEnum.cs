using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum GenderEnum
    {
        [EnumMember(Value = "Male")]
        Male,

        [EnumMember(Value = "Female")]
        Female,

        [EnumMember(Value = "Booth")]
        Booth,
    }
}