import express from 'express';
import { crearPrioridad, listarPrioridades, editarPrioridadVista, editarPrioridad, eliminarPrioridad } from '../controller/PrioridadController.js';

const router = express.Router();

router.post('/prioridades', crearPrioridad);
router.get('/prioridades', listarPrioridades);
router.get('/prioridades/:id/edit', editarPrioridadVista);
router.put('/prioridades/:id', editarPrioridad);
router.delete('/prioridades/:id', eliminarPrioridad);

export default router;
