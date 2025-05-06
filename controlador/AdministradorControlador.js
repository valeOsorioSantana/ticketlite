const modelo = require('../modelo/AdministradorModelo');

class AdministradorControlador {
//funcion crear nuevo Administrador
    static async crearAdministrador(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.crearAdministradores(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'Administrador creado', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al crear el administrador por falta de datos' });
        }
      }
      //funcion autenticar al Administrador
      static async autenticarAdministrador(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.autenticarAdministradores(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Administrador ha sido autenticado', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al autenticar al administrador por falta de datos' });
        }
      }
      //funcion recuperar Administrador

      static async recuperarAdministrador(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.recuperarAdministradores(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Administrador ha recuperado su cuenta', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al recuperar el administradoro' });
        }
      }
      //funcion recuperar contraseña
      
      static async recuperarClave(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.recuperarClaves(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Administrador ha recuperado su contraseña', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al recuperar la contraseña' });
        }
      }
      //funcion modificar perfil del Administrador

      static async modificarPerfil(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.modificarPerfiles(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Administrador ha modificado su perfil', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al modificar el administrador por falta de datos' });
        }
      }
}

module.exports = AdministradorControlador;