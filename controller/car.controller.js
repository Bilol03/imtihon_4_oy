import { getData, postData } from "../service/car.service.js"
 
let getHome = (req, res) => {
    let datas = getData('data')
    res.render('index', {datas: datas})
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
    console.log(body);
    
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

let deleteCars = (req, res) => {
    let datas = getData('data')
    datas = datas.filter(el => el.id !== +req.params.id)
    postData('data', datas)
    res.status(200).json({message: "Success!"})
}

export {
    getHome,
    getCars,
    getById,
    getAdmin, 
    postCars,
    updateCar,
    deleteCars,

}