import express from 'express';
import cors from 'cors';
import { router } from './routes/app.routes.js';

const app = express();
app.use(cors())
app.use(express.json());

app.use('/', router);

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))