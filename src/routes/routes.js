import { Router } from 'express';

import { todasLasTareas, tareaPorId, actualizarTarea, crearTarea, eliminarTarea } from '../controllers/controllers.js';

const taskRouter = Router(); // Crea un router 

import { validacionesDeTasks } from "../controllers/validations.js"
import { applyValidations } from "../controllers/applyValidations.js"
import { body } from "express-validator"

taskRouter.get("/", todasLasTareas)




taskRouter.get('/tasks', todasLasTareas); // obtener todas las tareas
taskRouter.get('/tasks/:id', tareaPorId); // obtener tarea por id
taskRouter.put('/tasks/:id', actualizarTarea); // actualizar datos de tarea
//taskRouter.post('/tasks', crearTarea); // crear nueva tarea
taskRouter.post("/",
    validacionesDeTasks, applyValidations, crearTarea)
  
taskRouter.delete('/tasks/:id', eliminarTarea); // eliminar tarea

// Exporta el router para poder importarlo en el archivo principal
export {taskRouter};