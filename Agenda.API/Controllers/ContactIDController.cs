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

    public class ContactIDController :   ControllerBase
    {
        private readonly IContactRepo _repo;
        private readonly IMapper _mapper;

        public ContactIDController(IContactRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> find(int id)
        {
            var user = await _repo.GetContact(id);
            var userToReturn = _mapper.Map<ContactForDetailedDto>(user);

          return Ok(userToReturn);
        }
    }
}
