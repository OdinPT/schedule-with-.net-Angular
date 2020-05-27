using Agenda.APi.Data;
using Agenda.APi.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Agenda.APi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class NotasIDController :   ControllerBase
    {
        private readonly IContactRepo _repo;
        private readonly IMapper _mapper;

        public NotasIDController(IContactRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        //retorna registo selecionado
        
        [HttpGet("{id}")]
        public async Task<IActionResult> findNota(int id)
        {
            var notx = await _repo.GetNota(id);
            var noteToReturn = _mapper.Map<NotaForDetailedDto>(notx);

          return Ok(noteToReturn);
        }
        
    }
}
