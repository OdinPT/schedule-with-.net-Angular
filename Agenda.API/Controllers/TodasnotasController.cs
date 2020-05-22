using Agenda.APi.Data;
using Agenda.APi.Dtos;
using Agenda.APi.Helpers;
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
    public class TodasnotasController : ControllerBase
    {
        private readonly IContactRepo _repo;
        private readonly IMapper _mapper;

        public TodasnotasController(IContactRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }


        [HttpGet("{myString}")]
        public async Task<IActionResult> GetNotas(string myString)
        {
            // se passar numero retorna true se for string retorna false
            double num;
            bool isNumber = double.TryParse(myString, out num);

            if (isNumber)
            {
                //string is number
                int myInt = int.Parse(myString);

                var users = await _repo.GetNotas(myInt);
                var usersToReturn = _mapper.Map<IEnumerable<NotasForListDTO>>(users);
                return Ok(usersToReturn);
            }
            else
            {
                //string is not a number
                var user = await _repo.searchNota(myString.ToLower());

                var userToReturn = _mapper.Map<IEnumerable<NotasForListDTO>>(user);

                return Ok(userToReturn);
            }
        }


        [HttpPost("register")]
        public async Task<IActionResult> register(NotasToRegisterDto notasToRegisterDto)
        {
            notasToRegisterDto.TituloNota = notasToRegisterDto.TituloNota.ToLower();
            var NotaCreate = new Nota
            {
                TituloNota = notasToRegisterDto.TituloNota
            };

            var createdCont = await _repo.RegisterNotas(NotaCreate, notasToRegisterDto.TituloNota, notasToRegisterDto.DescNota,
                                                          notasToRegisterDto.Id_Func);
            return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DelContact(int id)
        {

            var Rep = await _repo.GetNota(id);

            if (Rep != null)
            {
                _repo.Delete(Rep);

            }
            else
            {
                return BadRequest("");
            }

            return Ok();
        }

    }
}
