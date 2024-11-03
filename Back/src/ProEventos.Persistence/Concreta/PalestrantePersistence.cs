using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain.models;
using ProEventos.Persistence.Contextos;
using ProEventos.Persistence.Interfaces;

namespace ProEventos.Persistence.Concreta
{
    public class PalestrantePersistence : IPalestrantePersistence
    {
        private readonly ProEventoContext _context;

        public PalestrantePersistence(ProEventoContext context)
        {
            _context = context;

        }
        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEvento = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
         .Include(e => e.RedeSociais);
            if (includeEvento)
            {
                query = query
                .Include(e => e.PalestrantesEventos)
                .ThenInclude(e => e.Evento);
            }
            query = query.OrderBy(e => e.Id);

            return await query.AsNoTracking().ToArrayAsync();

        }

        public async Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEvento = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
         .Include(p => p.RedeSociais);
            if (includeEvento)
            {
                query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(p => p.Evento);
            }
            query = query.OrderBy(p => p.Id)
                        .Where(P => P.Nome.ToLower()
                        .Contains(nome.ToLower()));

            return await query.AsNoTracking().ToArrayAsync();

        }


        public async Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEvento)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
      .Include(p => p.RedeSociais);
            if (includeEvento)
            {
                query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(p => p.Evento);
            }
            query = query.Where(P => P.Id == palestranteId);

            return await query.AsNoTracking().FirstAsync();
        }


    }
}