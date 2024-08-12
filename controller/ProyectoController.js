import Proyecto from '../model/ProyectoModel.js';
import Prioridad from '../model/PrioridadModel.js';


export const crearProyecto = async (req, res) => {
  const { nombre, descripcion, fecha_inicio, fecha_fin, estado, prioridad_id } = req.body;
  try {
    const nuevoProyecto = await Proyecto.create({ nombre, descripcion, fecha_inicio, fecha_fin, estado, prioridad_id });
    res.redirect('/proyectos');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const listarProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll({
      include: Prioridad
    });
    const prioridades = await Prioridad.findAll();
    res.render('proyectos', { proyectos, prioridades });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editarProyectoVista = async (req, res) => {
    try {
      const proyecto = await Proyecto.findByPk(req.params.id);
      const prioridades = await Prioridad.findAll();
  
     
      const proyectoData = proyecto.get({ plain: true });
      const prioridadesData = prioridades.map(prioridad => {
        const prioridadData = prioridad.get({ plain: true });
        return {
          ...prioridadData,
          selected: prioridadData.id === proyectoData.prioridad_id
        };
      });
  
      res.render('editarProyecto', { proyecto: proyectoData, prioridades: prioridadesData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


export const editarProyecto = async (req, res) => {
  const { nombre, descripcion, fecha_inicio, fecha_fin, estado, prioridad_id } = req.body;
  try {
    await Proyecto.update({ nombre, descripcion, fecha_inicio, fecha_fin, estado, prioridad_id }, { where: { id: req.params.id } });
    res.redirect('/proyectos');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const eliminarProyecto = async (req, res) => {
  const { id } = req.params;
  try {
    await Proyecto.destroy({ where: { id } });
    res.redirect('/proyectos');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const filtrarProyectos = async (req, res) => {
  const { prioridad_id } = req.query;
  try {
    const proyectos = await Proyecto.findAll({
      where: { prioridad_id },
      include: Prioridad
    });
    const prioridades = await Prioridad.findAll();
    res.render('proyectos', { proyectos, prioridades });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
