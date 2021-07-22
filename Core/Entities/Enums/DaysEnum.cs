using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum DaysEnum
    {
        [EnumMember(Value = "Sunday")]
        Sunday,

        [EnumMember(Value = "Monday")]
        Monday,

        [EnumMember(Value = "Tuesday")]
        Tuesday,

        [EnumMember(Value = "Wednesday")]
        Wednesday,

        [EnumMember(Value = "Thursday")]
        Thursday,

        [EnumMember(Value = "Friday")]
        Friday,

        [EnumMember(Value = "Saturday")]
        Saturday,
    }
}