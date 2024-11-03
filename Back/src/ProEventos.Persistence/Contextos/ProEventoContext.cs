using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain.models;

namespace ProEventos.Persistence.Contextos
{
    public class ProEventoContext   : DbContext
    {
        public ProEventoContext(DbContextOptions<ProEventoContext> options) : 
        base(options)
        {
            
        }
        
        public DbSet<Evento>? Eventos {get;set;} 
        public DbSet<Lote>? Lotes {get;set;} 
        public DbSet<Palestrante>? Palestrantes {get;set;} 
        public DbSet<PalestranteEvento>? PalestrantesEventos {get;set;} 
        public DbSet<RedeSocial>? RedesSociais {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
            .HasKey(p => new {p.EventoId, p.PalestranteId});
            
            modelBuilder.Entity<Evento>()
            .HasMany(e=>e.RedesSociais)
            .WithOne(rs =>rs.Evento)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Palestrante>()
            .HasMany(p=>p.RedeSociais)
            .WithOne(rs =>rs.Palestrante)
            .OnDelete(DeleteBehavior.Cascade);
        }

    }
}