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
    public class RepositoryPersistence : IRepositoryPersistence
    {
        private readonly ProEventoContext _context;

        public RepositoryPersistence(ProEventoContext context)
        {
            _context = context;

        }
        public void Add<T>(T Entity) where T : class
        {
            _context.Add(Entity);
        }
        public void Update<T>(T Entity) where T : class
        {
            _context.Update(Entity);
        }

        public void Delete<T>(T Entity) where T : class
        {
            _context.Remove(Entity);
        }

        public void DeleteRange<T>(T[] Entity) where T : class
        {
            _context.RemoveRange(Entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

    }
}