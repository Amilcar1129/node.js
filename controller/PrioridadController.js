import Prioridad from '../model/PrioridadModel.js';

// Crear una nueva prioridad
export const crearPrioridad = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const nuevaPrioridad = await Prioridad.create({ nombre, descripcion });
    res.redirect('/prioridades');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todas las prioridades
export const listarPrioridades = async (req, res) => {
  try {
    const prioridades = await Prioridad.findAll();
    res.render('prioridades', { prioridades });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar una prioridad existente (vista de formulario de edición)
export const editarPrioridadVista = async (req, res) => {
  try {
    const prioridad = await Prioridad.findByPk(req.params.id);
    res.render('editarPrioridad', { prioridad });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una prioridad existente
export const editarPrioridad = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    await Prioridad.update({ nombre, descripcion }, { where: { id: req.params.id } });
    res.redirect('/prioridades');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una prioridad
export const eliminarPrioridad = async (req, res) => {
  const { id } = req.params;
  try {
    await Prioridad.destroy({ where: { id } });
    res.redirect('/prioridades');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
