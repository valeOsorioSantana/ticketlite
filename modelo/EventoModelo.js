const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class EventoModelo {
  static async crearEventos(nom, des, fini, ffin, ubi, cat, org, rec) {
    const query = 'INSERT INTO evento (nombre, descripcion, fechadeinicio, fechafinal, ubicacion, categoria, organizador, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const saltRounds = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);
      
      return await dbService.query(query, [nom, des, fini, ffin, ubi, cat, org, rec]);
    } catch (err) {
      throw new Error(`Error al crear el evento: ${err.message}`);
    }
  }
  
    //funcion recuperar Evento
    static async recuperarEvento(nom, des, fini, ffin, ubi, cat, org, rec) {
      const query = 'INSERT INTO evento (nombre, descripcion, fechadeinicio, fechafinal, ubicacion, categoria, organizador, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
      try {
        // Generar el hash de la contraseña con bcrypt
        const salto = 10; // Nivel de seguridad de encriptación
        const contra = await bcrypt.hash(contras, salto);
  
        return await dbService.query(query, [nom, des, fini, ffin, ubi, cat, org, rec]);
      } catch (err) {
        throw new Error(`Error al recuperar el Evento: ${err.message}`);
      }
    }//cerrar recuperar Evento
  
    //funcion modificar Evento
    static async modificarEvento(om, des, fini, ffin, ubi, cat, org, rec) {
      const query = 'INSERT INTO evento (nombre, descripcion, fechadeinicio, fechafinal, ubicacion, categoria, organizador, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
      try {
        // Generar el hash de la contraseña con bcrypt
        const salto = 10; // Nivel de seguridad de encriptación
        const contra = await bcrypt.hash(contras, salto);
  
        return await dbService.query(query, [nom, des, fini, ffin, ubi, cat, org, rec]);
      } catch (err) {
        throw new Error(`Error al modificar el Evento: ${err.message}`);
      }
    }//cerrar modificar Evento
}

module.exports = EventoModelo;