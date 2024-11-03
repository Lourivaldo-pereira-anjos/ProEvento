using ProEventos.Application.Interfaces;
using ProEventos.Domain.models;
using ProEventos.Persistence.Interfaces;

namespace ProEventos.Application.Concreta
{
    public class EventoService : IEventoService
    {
        private readonly IRepositoryPersistence _persistence;
        private readonly IEventoPersistence _eventoPersistence;
        public EventoService(IRepositoryPersistence persistence, IEventoPersistence eventoPersistence)
        {
            this._eventoPersistence = eventoPersistence;
            this._persistence = persistence;

        }

        public async Task<Evento> AddEventos(Evento model)
        {
            try
            {
                var _evento = new Evento();
                _persistence.Add(model);
                if (await _persistence.SaveChangesAsync())
                {
                    _evento = await _eventoPersistence.GetEventoByIdAsync(model.Id,false);
                }
                return _evento;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
        public async Task<Evento> Updatevento(int eventoId, Evento model)
        {
            try
            {

                var _evento = await _eventoPersistence.GetEventoByIdAsync(eventoId, false);
                if (_evento == null) return new Evento();

                model.Id = eventoId;

                _persistence.Update(model);

                if (await _persistence.SaveChangesAsync())
                {
                    _evento = await _eventoPersistence.GetEventoByIdAsync(model.Id, false);
                }
                return new Evento();

            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }

        }

        public async Task<bool> Deletevento(int eventoId)
        {
            try
            {

                var _evento = await _eventoPersistence.GetEventoByIdAsync(eventoId, false);
                if (_evento == null) throw new Exception("O evento não encontrado.");

                _persistence.Delete<Evento>(_evento);

                return await _persistence.SaveChangesAsync();

            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }

        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false)
        {
            try
            {

                return await _eventoPersistence.GetAllEventosAsync(includePalestrante);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false)
        {
            try
            {
                return await _eventoPersistence.GetAllEventosByTemaAsync(tema, true);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }

        }

        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrante = false)
        {
            try
            {
                return await _eventoPersistence.GetEventoByIdAsync(eventoId, true);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }


        }


    }
}