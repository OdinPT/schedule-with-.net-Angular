using Agenda.APi.Data;
using Agenda.APi.Dtos;
using Agenda.APi.Models;
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
    public class ContactController : ControllerBase
    {
        private readonly IContactRepo _repo;
        private readonly IMapper _mapper;

        public ContactController(IContactRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpPost("register")]
        // public async Task<IActionResult> register(ContactToRegisterDto contactToRegisterDto, string NomeContact, string EmailContact, string NumeroContact,
        //string IdEmployee, string DataAniversarioContact)

        public async Task<IActionResult> register(ContactToRegisterDto contactToRegisterDto)
        {
            contactToRegisterDto.NomeContact = contactToRegisterDto.NomeContact.ToLower();

            var contacttoCreate  = new Contact
            {
               NomeContact = contactToRegisterDto.NomeContact
            };

            var createdCont = await _repo.RegisterContact(contacttoCreate, contactToRegisterDto.NomeContact, contactToRegisterDto.EmailContact, 
                                                          contactToRegisterDto.NumeroContact, contactToRegisterDto.IdEmployee, contactToRegisterDto.DataAniversarioContact);
            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> GetContacts()
        {
            var users = await _repo.Getcontacts();
            var usersToReturn = _mapper.Map<IEnumerable<ContactForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Getcontact(int id)
        {
            var user = await _repo.GetContact(id);
            var userToReturn = _mapper.Map<ContactForDetailedDto>(user);

            return Ok(userToReturn);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContacto(int id, ContactToUpdateDto contactToUpdateDto)
        {

            var contacfromRepo = await _repo.GetContact(id);

            _mapper.Map(contactToUpdateDto, contacfromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception("Updating user  failed on save");
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DelContact(int id)
        {
        
           var Rep = await _repo.GetContact(id);
         
            if (Rep != null) {
              _repo.Delete(Rep);

            } else {
               return BadRequest("saiu");
            }

          return Ok();
        }
    }
}
