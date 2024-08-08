import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';
import Prioridad from './PrioridadModel.js';

const Proyecto = sequelize.define('proyecto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prioridad_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Prioridad,
      key: 'id'
    }
  }
}, {
  tableName: 'proyectos'
});

Proyecto.belongsTo(Prioridad, { foreignKey: 'prioridad_id' });

export default Proyecto;
