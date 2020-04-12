﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Agenda.APi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Agenda.APi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
       

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataContext _context;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

      

        [HttpGet]
        public async Task<IActionResult> GetValues() 
        {
            var values = await _context.values.ToListAsync();
            return Ok(values);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _context.values.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

    }
}
