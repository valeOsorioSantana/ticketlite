const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class CalendarioModelo {
  static async crearCalendarios(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec) {
    const query = 'INSERT INTO calendario (nombreevento, descripcion, fechainicio, fechafin, ubicacion, idusuario, categoria, opciondeentrada, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const saltRounds = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);
      
      return await dbService.query(query, [nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec]);
    } catch (err) {
      throw new Error(`Error al crear el calendario: ${err.message}`);
    }
  }
  
    //funcion recuperar Calendario
    static async recuperarCalendarios(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec) {
      const query = 'INSERT INTO calendario (nombreevento, descripcion, fechainicio, fechafin, ubicacion, idusuario, categoria, opciondeentrada, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
      try {
        // Generar el hash de la contraseña con bcrypt
        const salto = 10; // Nivel de seguridad de encriptación
        const contra = await bcrypt.hash(contras, salto);
  
        return await dbService.query(query, [nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec]);
      } catch (err) {
        throw new Error(`Error al recuperar el Calendario: ${err.message}`);
      }
    }//cerrar recuperar Calendario
  
    //funcion modificar Calendario
    static async modificarCalendario(nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec) {
      const query = 'INSERT INTO calendario (nombreevento, descripcion, fechainicio, fechafin, ubicacion, idusuario, categoria, opciondeentrada, recordatorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
      try {
        // Generar el hash de la contraseña con bcrypt
        const salto = 10; // Nivel de seguridad de encriptación
        const contra = await bcrypt.hash(contras, salto);
  
        return await dbService.query(query, [nomeve, des, fini, ffin, ubi, idusu, cat, opentr, rec]);
      } catch (err) {
        throw new Error(`Error al modificar el Calendario: ${err.message}`);
      }
    }//cerrar modificar Calendario
}

module.exports = CalendarioModelo;