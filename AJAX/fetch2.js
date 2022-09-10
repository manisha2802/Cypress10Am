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


function getUsers(p) {

    fetch(`https://reqres.in/api/users?page=${p}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            return res.data[1].id
        }).then(function (id) {
            fetch(`https://reqres.in/api/users/${id}`)
                .then(function (res) {
                    return res.json()
                }).then(function (res) {
                    //console.log(res)
                    htmlRender(res.data)
                })
        })
}
getUsers(2)

