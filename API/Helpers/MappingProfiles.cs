using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Inputs;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<ImageAssets, ImageAssetsDto>()
            .ForMember(d => d.ImgUrl, o => o.MapFrom<ImageAssetsUrlResolver>());

            CreateMap<Live, LiveDto>().ReverseMap();

            CreateMap<Fathers, FathersDto>().ReverseMap();
            CreateMap<CreateFatherInput, Fathers>().ReverseMap();
            CreateMap<CreateFatherInput, FathersDto>().ReverseMap();
            CreateMap<FathersSection, FathersReturnDto>().ReverseMap();

            CreateMap<Confessions, ConfessionsDto>().ReverseMap();
            CreateMap<CreateConfessionsInput, Confessions>().ReverseMap();

            CreateMap<SundayMeeting, SundayMeetingDto>().ReverseMap();

            CreateMap<AboutChurch, AboutChurchDto>().ReverseMap();
            CreateMap<CreateAboutChurch, AboutChurch>().ReverseMap();
            CreateMap<CreateAboutChurch, AboutChurchDto>().ReverseMap();

            CreateMap<ChurchService, ChurchServiceDto>().ReverseMap();
            CreateMap<ChurchService, ChurchServicesNamesDto>().ReverseMap();
            CreateMap<CreateService, ChurchService>().ReverseMap();

            CreateMap<CreateMassIntput, Mass>().ReverseMap();
            CreateMap<Mass, MassDto>().ReverseMap();
            // CreateMap<MassEvent, MassEventDto>().ReverseMap();
            CreateMap<MassSection, MassSectionDto>().ReverseMap();

            CreateMap<Gallery, GalleryDto>().ReverseMap();
            CreateMap<GalleryImages, GalleryImagesDto>().ReverseMap();
            CreateMap<GeneralSection, GeneralSectionsDto>().ReverseMap();
            CreateMap<CreateGalleryImage, GalleryImages>().ReverseMap();
            CreateMap<CreateGeneralSection, GeneralSection>().ReverseMap();

            CreateMap<AdsSection, AdsSectionDto>().ReverseMap();
            CreateMap<AdsSection, CreateAdInput>().ReverseMap();
        }
    }
}