import express from 'express'
import ejs from 'ejs'
import path from "path"

let app = express()

app.use(express.static(path.join(process.cwd(), "public")))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", "./public/views");

import carRouter from "../routes/car.route.js"

app.use(carRouter)

export {
    app
}