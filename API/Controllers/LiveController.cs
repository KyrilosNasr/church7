using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LiveController : BaseApiController
    {
        private readonly IGenericRepository<Live> _liveRepository;
        private readonly IMapper _mapper;
        public LiveController(
            IMapper mapper,
            IGenericRepository<Live> liveRepository
        )
        {
            _mapper = mapper;
            _liveRepository = liveRepository;
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult<LiveDto>> CreateOrEdit(LiveDto input)
        {
            if (string.IsNullOrEmpty(input.VideoId))
            {
                input.IsActive = false;
            }
            var currentLive = await _liveRepository.GetLastAsync();
            if (currentLive == null)
            {
                var inputMapper = _mapper.Map<LiveDto, Live>(input);
                var data = await _liveRepository.Add(inputMapper);
                await _liveRepository.Save();

                return _mapper.Map<Live, LiveDto>(data);
            }
            else
            {
                currentLive.IsActive = input.IsActive;
                currentLive.VideoId = input.VideoId;
                _liveRepository.Update(currentLive);
                await _liveRepository.Save();
                return _mapper.Map<Live, LiveDto>(currentLive);
            }
        }

        [HttpGet]
        public async Task<ActionResult<LiveDto>> GetCurrentLive()
        {
            var live = await _liveRepository.GetLastAsync();
            if (live == null)
            {
                return new LiveDto();
            }
            else
            {
                return _mapper.Map<Live, LiveDto>(live);
            }
        }

    }
}