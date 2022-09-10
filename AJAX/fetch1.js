function fetchData(p){
    fetch(`https://reqres.in/api/users?page=${p}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        //console.log(res.data)
        res.data.forEach(element => {
            htmlRender(element) 
        });
    })
}

fetchData(2)

let htmlRender=function(el){
    let container=document.querySelector('#users')
    let html=
     `<div>
      <h1>${el.id}</h1>
      <p>${el.first_name} ${el.last_name}</p>
      <p>${el.email}</p>
      <img src="${el.avatar}"> 
     </div>`

     container.insertAdjacentHTML('beforeend',html)
}