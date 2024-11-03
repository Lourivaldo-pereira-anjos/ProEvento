using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain.models;

namespace ProEventos.Persistence.Interfaces
{
    public interface IPalestrantePersistence
    {
        
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEvento);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEvento);
        Task<Palestrante> GetPalestranteByIdAsync(int eventoId, bool includeEvento);


    }
}