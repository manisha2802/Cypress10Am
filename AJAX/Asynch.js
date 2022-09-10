let htmlRender = function (el) {
    let c = document.querySelector('#container')
    let html = `
    <div>
    <h2>${el.id}</h2>
    <h3>${el.email}</h3>
    <img src=${el.avatar}>
    </div>`
    c.insertAdjacentHTML('beforeend', html)
}

async function getUser(p) {

    let res = await fetch(`https://reqres.in/api/users?page=${p}`)
    let readable = await res.json()
    let id= readable.data[2].id
    let res1 = await fetch(`https://reqres.in/api/users/${id}`)
    let read=await res1.json()
    console.log(read)
    htmlRender(read.data)
}

getUser(2)