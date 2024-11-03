using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain.models;

namespace ProEventos.Persistence.Interfaces
{
    public interface IEventoPersistence
    {
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante);
        Task<Evento[]> GetAllEventosAsync(bool includePalestrante);
        Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante);

    }
}