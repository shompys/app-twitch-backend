import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes';
import {createRoles} from './libs/initialSetup';
import {errorHandler} from './middlewares/index';

// import info from '../package.json';
const app = express();
//creacion de roles imaginarios en dev:
createRoles();
// app.set('info', info);
app.set('port', process.env.PORT || 4001);

//middlewares
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());//le decimos que entienda los objetos json
app.use(express.urlencoded({extended: false}))// recibe un formulario y lo transforma en un objeto
app.use(cors()); //establece las reglas por nosotros para permitir comunicarse entre servidores.

//version one
app.use('/', routes);

app.use(errorHandler);

export default app;