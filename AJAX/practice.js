let a=[10,20,5,05,6,6]
let b=new Set(a)
//a=new Set(a)
console.log(b)

let obj={

    a:"abc",
    b:"pqr"
}

let obj2={
    c:"a",
    d:"b"
}

Object.assign(obj,obj2)
console.log(obj.d)

let arr=[10,20,30]
arr.push(50)
console.log(arr)

console.log(arr.pop())
console.log(arr)

let shift=arr.shift()
console.log(shift)

let unshift=arr.unshift(55)
console.log(unshift)