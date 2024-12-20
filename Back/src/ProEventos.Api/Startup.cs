using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using ProEventos.Application.Interfaces;
using ProEventos.Application.Concreta;
using ProEventos.Persistence.Interfaces;
using ProEventos.Persistence.Concreta;
using ProEventos.Persistence.Contextos;

namespace ProEventos.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            string connectionString = Configuration.GetConnectionString("default");
            services.AddDbContext<ProEventoContext>(x => x.UseSqlite(connectionString));

            services.AddCors();
            services.AddControllers()
                    .AddNewtonsoftJson(
                        x=>x.SerializerSettings.ReferenceLoopHandling=
                        Newtonsoft.Json.ReferenceLoopHandling.Ignore
                    );                                   
            services.AddScoped<IRepositoryPersistence,RepositoryPersistence>();
            services.AddScoped<IEventoPersistence,EventoPersistence>();
            services.AddScoped<IPalestrantePersistence,PalestrantePersistence>();            
            services.AddScoped<IEventoService,EventoService>();            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.Api v1"));
            }
            
            app.UseHttpsRedirection();

            app.UseRouting();
 
            app.UseAuthorization();
        
            app.UseCors(x=>x.AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowAnyOrigin());
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
