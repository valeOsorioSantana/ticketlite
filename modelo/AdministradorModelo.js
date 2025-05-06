const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class AdministradorModelo {
  // funcion para crear nuevos Administradores
  static async crearAdministradores(doc, name, tel, email, contras) {
    const query = 'INSERT INTO administradores (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta: ${err.message}`);
    }
  }//cerrar crear Administrador

  //funcion autenticar al Administrador
  static async autenticarAdministrador(doc, name, tel, email, contras) {
    const query = 'INSERT INTO administradores (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al autenticar su cuenta: ${err.message}`);
    }
  }//cerrar autenticar Administrador

  //funcion recuperar Administrador
  static async recuperarAdministrador(doc, name, tel, email, contras) {
    const query = 'INSERT INTO administradores (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al recuperar al administrador: ${err.message}`);
    }
  }//cerrar recuperar Administrador

  //funcion recuperar contraseña
  static async recuperarClave(doc, name, tel, email, contras) {
    const query = 'INSERT INTO administradores (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al recuperar la clave: ${err.message}`);
    }
  }//cerrar recuperar contraseña

  //funcion modificar perfil del Administrador
  static async modificarPerfil(doc, name, tel, email, contras) {
    const query = 'INSERT INTO administradores (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al modificar el perfil: ${err.message}`);
    }
  }//cerrar modificar perfil del Administrador
  
}

module.exports = AdministradorModelo;