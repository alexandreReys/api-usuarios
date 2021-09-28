import * as cors from 'cors';
import * as express from 'express';
import * as logger from 'morgan';
import { conectarServidorNoBD } from './config/db';
import { routerLancamento } from './route/Lancamento';
import { routerUsuario } from './route/usuarioRoute';

export const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(logger('dev'));

conectarServidorNoBD();

app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/', (req, res) => res.send('API Version 1.0.0'));
