using Microsoft.AspNetCore.Mvc;
using ProEventos.Domain.models;
using ProEventos.Application.Interfaces;

namespace ProEventos.Api.Controllers;

[ApiController]
[Route("Api/[controller]")]
public class EventoController : ControllerBase
{

    public readonly IEventoService _eventoService;
    public EventoController(IEventoService eventoService)
    {
        this._eventoService = eventoService;
    }


    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var eventos = await _eventoService.GetAllEventosAsync(true);
            if (eventos == null) return NotFound("Nenhum evento encontrado.");
            return Ok(eventos);
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar recuperar os eventos. Erro:{ex.Message}");

        }
    }
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            var evento = await _eventoService.GetAllEventosAsync(true);
            if (evento == null) return NotFound("Nenhum evento encontrado.");
            return Ok(evento);
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar recuperar os eventos. Erro:{ex.Message}");

        }
    }

    [HttpGet("{tema}/tema")]
    public async Task<IActionResult> GetByTema(string tema)
    {
        try
        {
            var eventos = await _eventoService.GetAllEventosByTemaAsync(tema, true);
            if (eventos == null) return NotFound("Nenhum tema encontrado.");
            return Ok(eventos);
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar recuperar os eventos. Erro:{ex.Message}");

        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Evento model)
    {
        try
        {
            var evento = await _eventoService.AddEventos(model);
            if (evento == null) return BadRequest("Erro ao tentar adicionar o evento.");
            return Ok(evento);
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar adicionar o evento. Erro:{ex.Message}");

        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Evento model)
    {
        try
        {
            var evento = await _eventoService.Updatevento(id,model);
            if (evento == null) return BadRequest("Erro ao tentar atualizar o evento.");
            return Ok(evento);
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar atualizar o evento. Erro:{ex.Message}");

        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            if( await _eventoService.Deletevento(id)){
                return Ok("Deletado");
            }
            return BadRequest("Evento não deletado");
        }
        catch (Exception ex)
        {
            return this.StatusCode(StatusCodes.Status500InternalServerError,
            $"Erro ao tentar remover o evento. Erro:{ex.Message}");

        }
    }
}
