import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

const Prioridad = sequelize.define('prioridad', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'prioridades'
});

export default Prioridad;
