// Requerir Express.js para crear un servidor web
// express es un entorno que nos permite desarrollar de manera eficiente aplicaciones web y APIS
import express from 'express';

import { taskRouter } from "./routes/routes.js";

// Crear una instancia de la aplicación Express para representar el servidor
const app = express();

app.use(express.json()); // Parsear JSON
app.use(express.urlencoded({ extended: true })); // Parsear datos de formularios

app.use("/api", taskRouter);

// Iniciar el servidor y escuchar solicitudes en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000'); // Mensaje de confirmación
});