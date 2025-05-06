const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class ClienteModelo {
  // funcion para crear nuevos clientes
  static async crearClientes(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta: ${err.message}`);
    }
  }//cerrar crear cliente

  //funcion autenticar al cliente
  static async autenticarCliente(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al autenticar su cuenta: ${err.message}`);
    }
  }//cerrar autenticar cliente

  //funcion recuperar usuario
  static async recuperarCliente(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al recuperar usuario: ${err.message}`);
    }
  }//cerrar recuperar usuario

  //funcion recuperar contraseña
  static async recuperarClave(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al recuperar la clave: ${err.message}`);
    }
  }//cerrar recuperar contraseña

  //funcion modificar perfil del cliente
  static async modificarPerfil(doc, name, tel, email, contras) {
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);

      return await dbService.query(query, [doc, name, tel, email, contra]);
    } catch (err) {
      throw new Error(`Error al modificar el perfil: ${err.message}`);
    }
  }//cerrar modificar perfil del cliente
  
}

module.exports = ClienteModelo;