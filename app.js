import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import hbs from 'hbs';
import { sequelize } from './db/conexion.js';
import prioridadRoutes from './router/prioridades.js';
import proyectoRoutes from './router/proyectos.js';
import methodOverride from 'method-override';

dotenv.config();

const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Añadir middleware para manejar _method

app.use('/', prioridadRoutes);
app.use('/', proyectoRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
