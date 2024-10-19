using Microsoft.AspNetCore.Mvc;
using ProEvento.Api.models;

namespace ProEvento.Api.Controllers;

[ApiController]
[Route("Api/[controller]")]
public class EventoController : ControllerBase
{
    
    [HttpGet(Name = "Evento")]
    public Evento Get()
    {
        Evento evento = new Evento(){
            EventoId = 1,
            DataEvento = DateTime.Now.ToString(),
            Local = "Alto da Mooca",
            Lote="L123131313",
            ImageUrl="/image/foto.png",
            QtdPessoas=10,
            Tema="Eventos"

        };
       return evento;
    }
}
