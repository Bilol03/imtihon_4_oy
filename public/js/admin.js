let form = document.getElementById("car-form")

async function postData() {

    let number = document.getElementById("number").value
    let owner = document.getElementById("owner").value
    let model = document.getElementById("model").value
    let body = {
        number,
        owner,
        model
    }
    let responce = await fetch("/cars", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    console.log(await responce.json);
    
}

form.addEventListener("submit", async ev => {
    ev.preventDefault()
    await postData()
})