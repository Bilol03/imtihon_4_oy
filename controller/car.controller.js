import { getData, postData } from "../service/car.service.js"
 
let getHome = (req, res) => {
    res.render('index')
}

let getCars = (req, res) => {
    let cars = getData("data")
    res.send(cars)
}

let getAdmin = (req, res) => {
    res.render("admin")
}

let getById = (req, res) => {
    let datas = getData('data')
    let data = datas.find(el => el.id == req.params.id)
    if(!data) return res.send("Ma'lumot topilmadi")
    res.status(200).json(data)
}

let postCars = (req, res) => {
    let body = req.body
    if (!body.number || !body.owner || !body.model) throw new Error("Qaysidur ma'lumot kiritilmagan")
    let date = new Date()
    let datas = getData('data')
    body.id = datas ? datas[datas.length - 1].id + 1 : 1
    body.parkedAt = date
    datas.push(body)
    postData("data", datas)
    res.status(201).json(body)
    
}

let updateCar = (req, res) => {
    let datas = getData('data')
    let body = req.body
    let data = datas.find(el => el.id == req.params.id)
    if(!data) return res.send("Malumot topilmadi!")
    if(body.owner) {
        data.owner = body.owner
    }
    if(body.model) {
        data.model = body.model
    }

    postData('data', datas)
    res.status(201).json("Success")
}

export {
    getHome,
    getCars,
    getById,
    getAdmin, 
    postCars,
    updateCar,

}