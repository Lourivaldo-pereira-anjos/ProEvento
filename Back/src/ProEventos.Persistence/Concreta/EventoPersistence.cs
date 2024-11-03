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
    public class EventoPersistence : IEventoPersistence
    {
        private readonly ProEventoContext _context;

        public EventoPersistence(ProEventoContext context)
        {
            _context = context;
            

        }
        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrante)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e => e.Lotes)
            .Include(e => e.RedesSociais);
            if (includePalestrante)
            {
                query = query
                .Include(e => e.PalestrantesEventos)
                .ThenInclude(p => p.Palestrante);
            }
            query = query.AsNoTracking().OrderBy(e => e.Id);

            return await query.AsNoTracking().ToArrayAsync();

        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e => e.Lotes)
            .Include(e => e.RedesSociais);
            if (includePalestrante)
            {
                query = query
                .Include(e => e.PalestrantesEventos)
                .ThenInclude(e => e.Palestrante);
            }
            query = query
            .Where(e => e.Tema.ToLower().Contains(tema.ToLower()))
            .OrderBy(e => e.Id);

            return await query.AsNoTracking().ToArrayAsync();

        }
        public async Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante)
        {
            IQueryable<Evento> query = _context.Eventos
               .Include(e => e.Lotes)
               .Include(e => e.RedesSociais);
            if (includePalestrante)
            {
                query = query
                .Include(e => e.PalestrantesEventos)
                .ThenInclude(e => e.Palestrante);
            }
            query = query
            .Where(e => e.Id == EventoId);

            return await query.AsNoTracking().FirstAsync();

        }


    }
}