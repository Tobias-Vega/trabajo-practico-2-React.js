import { Router } from "express";
import { saludarUsuario, validarUsuario } from "../controllers/users.controller.js";

const router = Router();

router.get('/validar/:nombre', validarUsuario);
router.get('/saludar/:nombre', saludarUsuario);

export { router };