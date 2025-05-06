const modelo = require('../modelo/CalendarioModelo');

class CalendarioControlador {
  static async crearCalendario(req, res) {
    const { t1: nomeve,t2: des,t3: fini,t4: ffin,t5: ubi,t6: idusu,t7: cat,t8: opentr,t9: rec } = req.body;
    try {
      const result = await modelo.crearCalendarios(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec);
      res.status(201).json({ mensaje: 'Calendario creado', id: result.insertId });
    }catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear el calendario' });
    }
  }
  //funcion recuperar Calendario

  static async recuperarCalendario(req, res) {
    const { t1: nomeve,t2: des,t3: fini,t4: ffin,t5: ubi,t6: idusu,t7: cat,t8: opentr,t9: rec } = req.body;
    try {
      const result = await modelo.recuperarCalendarios(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec);
      res.status(201).json({ mensaje: 'Se ha recuperado el calendario', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al recuperar el Calendario' });
    }
  }
  //funcion modificar Calendario

  static async modificarCalendario(req, res) {
    const { t1: nomeve,t2: des,t3: fini,t4: ffin,t5: ubi,t6: idusu,t7: cat,t8: opentr,t9: rec } = req.body;
    try {
      const result = await modelo.modificarCalendarios(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec);
      res.status(201).json({ mensaje: 'El Usuario ha modificado el calendario', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al modificar el Calendario' });
    }
  }
}

module.exports = CalendarioControlador;