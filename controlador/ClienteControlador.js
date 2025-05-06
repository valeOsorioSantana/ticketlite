const modelo = require('../modelo/ClienteModelo');

class ClienteControlador {
//funcion crear nuevo cliente
    static async crearCliente(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.crearClientes(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'Usuario creado', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al crear el usuario por falta de datos' });
        }
      }
      //funcion autenticar al cliente
      static async autenticarCliente(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.autenticarClientes(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Usuario ha sido autenticado', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al autenticar al usuario por falta de datos' });
        }
      }
      //funcion recuperar usuario

      static async recuperarCliente(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.recuperarClientes(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Usuario ha recuperado su cuenta', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al recuperar el usuario' });
        }
      }
      //funcion recuperar contraseña
      
      static async recuperarClave(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.recuperarClaves(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Usuario ha recuperado su contraseña', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al recuperar la contraseña' });
        }
      }
      //funcion modificar perfil del cliente

      static async modificarPerfil(req, res) {
        const { t1: doc,t2: name,t3: tel,t4: email,t5: contra } = req.body;
        try {
          const result = await modelo.modificarPerfiles(doc, name, tel, email, contra);
          res.status(201).json({ mensaje: 'El Usuario ha modificado su perfil', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Hubo un error al modificar el usuario por falta de datos' });
        }
      }
}

module.exports = ClienteControlador;