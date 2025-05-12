import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre

  res.json({nombre: `Hola ${nombre}`})
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))