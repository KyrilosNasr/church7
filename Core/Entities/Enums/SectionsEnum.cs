using System.Runtime.Serialization;

namespace Core.Entities.Enums
{
    public enum SectionsEnum
    {
        [EnumMember(Value = "Intro")]
        Intro,

        [EnumMember(Value = "DivImage")]
        DivImage,

        [EnumMember(Value = "Live")]
        Live,

        [EnumMember(Value = "Masses")]
        Masses,

        [EnumMember(Value = "Fathers")]
        Fathers,

        [EnumMember(Value = "AboutCHurch")]
        AboutCHurch,

        [EnumMember(Value = "SoundCloud")]
        SoundCloud,

        [EnumMember(Value = "Gallery")]
        Gallery,

        [EnumMember(Value = "Ads")]
        Ads,

    }

}