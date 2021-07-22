using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum MassEventsEnum
    {
        [EnumMember(Value = "Mass")]
        Mass,

        [EnumMember(Value = "PreMass")]
        PreMass,
        [EnumMember(Value = "MidnightPraises")]
        MidnightPraises,
    }

    public enum MassRepetationType
    {

        [EnumMember(Value = "Dialy")]
        Dialy,

        [EnumMember(Value = "Monthely")]
        Monthely,

        [EnumMember(Value = "Special")]
        Special,
    }
}