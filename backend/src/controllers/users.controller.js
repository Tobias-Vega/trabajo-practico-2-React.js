import { usuariosValidos } from "../db/users.db.js";

export const validarUsuario = (req, res) => {

  const nombre = req.params.nombre;

  if (!usuariosValidos.includes(nombre)) {
    return res.status(400).json({ error: `El usuario ${nombre} no es válido` });
  }

  return res.json({ 'message': 'Usuario válido'});

}

export const saludarUsuario = (req, res) => {
  const nombre = req.params.nombre;

  return res.json({ 'message': `Hola ${nombre}`});
}