using ProEventos.Domain.models;

namespace ProEventos.Application.Interfaces
{
    public interface IEventoService
    {
        Task<Evento> AddEventos(Evento evento);
        Task<Evento> Updatevento(int eventoId,Evento evento);
        Task<bool> Deletevento(int eventoId);        
    
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false);
        Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false);
        Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante = false);

    }
}