using Microsoft.AspNetCore.Mvc;
using ProEventos.Api.Data;
using ProEventos.Api.models;

namespace ProEventos.Api.Controllers;

[ApiController]
[Route("Api/[controller]")]
public class EventoController : ControllerBase
{
    private DataContext _context;
    public EventoController(DataContext context)
    {
        _context = context;
    }   

    [HttpGet("{id}")]
    public Evento GetById(int id)
    {
        Evento evento = _context.Eventos.Where(x=>x.EventoId == id).FirstOrDefault();
       return evento;
    }

    
    [HttpGet(Name = "Evento")]
    public List<Evento> Get()
    {
        return _context.Eventos.ToList();
    }

}
