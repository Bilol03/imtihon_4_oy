import fs from "fs"

let getData = (fileName) => {
    let data = fs.readFileSync("./config/"+fileName+".json", 'utf-8')
    return data ? JSON.parse(data) : []
}

let postData = (fileName, data) => {
    fs.writeFileSync("./config/"+fileName+".json", JSON.stringify(data, null, 4), 'utf-8')
    return true
}
export {
    getData,
    postData
}