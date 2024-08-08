import express from 'express';
import { crearProyecto, listarProyectos, editarProyectoVista, editarProyecto, eliminarProyecto, filtrarProyectos } from '../controller/ProyectoController.js';

const router = express.Router();

router.post('/proyectos', crearProyecto);
router.get('/proyectos', listarProyectos);
router.get('/proyectos/:id/edit', editarProyectoVista);
router.put('/proyectos/:id', editarProyecto);
router.delete('/proyectos/:id', eliminarProyecto);
router.get('/proyectos/filtrar', filtrarProyectos);

export default router;
