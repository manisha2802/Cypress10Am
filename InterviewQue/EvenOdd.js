let arr1 = [2, 3, 8, 9, 11, 20]
let arr2=[]
function evenOdd(arr) {

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]%2==0){
            arr2.push(arr[i])
        }

    }
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]%2!=0){
            arr2.push(arr[i])
        }

    }
    console.log(arr2)
}
evenOdd(arr1)