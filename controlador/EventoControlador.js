const modelo = require('../modelo/EventoModelo');

class EventoControlador{
  static async crearEvento(req, res) {
    const { t1: nom,t2:  des,t3:  fini,t4:  ffin,t5:  ubi,t6:  cat,t7:  org,t8: rec } = req.body;
    try{
      const result = await modelo.crearEventos(nom, des, fini, ffin, ubi, cat, org, rec);
      res.status(201).json({ mensaje: 'Evento creado', id: result.insertId });
    }catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear el evento' });
    }
  }
  //funcion recuperar Evento

  static async recuperarEvento(req, res) {
    const { t1: nom,t2:  des,t3:  fini,t4:  ffin,t5:  ubi,t6:  cat,t7:  org,t8: rec } = req.body;
    try {
      const result = await modelo.recuperarEventos(nom, des, fini, ffin, ubi, cat, org, rec);
      res.status(201).json({ mensaje: 'Se ha recuperado el evento con exito', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al recuperar el Evento' });
    }
  }

  //funcion modificar Evento

  static async modificarEvento(req, res) {
    const { t1: nom,t2:  des,t3:  fini,t4:  ffin,t5:  ubi,t6:  cat,t7:  org,t8: rec } = req.body;
    try {
      const result = await modelo.modificarEventos(nom, des, fini, ffin, ubi, cat, org, rec);
      res.status(201).json({ mensaje: 'El Usuario ha modificado el evento', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al modificar el evento' });
    }
  }
}

module.exports = EventoControlador;