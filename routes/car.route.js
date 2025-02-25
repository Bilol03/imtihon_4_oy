import { Router } from "express";
import { getHome, getCars, getAdmin, postCars, getById, updateCar, deleteCars } from '../controller/car.controller.js'

let route = Router()

route.get('/', getHome)
route.get("/cars", getCars)
route.get("/cars/:id", getById)
route.post('/cars', postCars)
route.put('/cars/:id', updateCar)
route.delete("/cars/:id", deleteCars)
route.get("/admin", getAdmin)


export default route