// const check = () => {
//     let num = document.getElementById('data').value
//     if (num%2==0) {
//         let res = document.getElementById('res').innerHTML= "Number is Even"
//     }
//     else{
//         res = document.getElementById('res').innerHTML= "Number is odd"
//     }
// }


const check = () => {
    let value = document.getElementById('data').value
    if (value>0) {
        res = `${value} is postive`
    }
    else if(value == 0){
        res =` ${value}   `
    }
    else if (value < 0){
        res  = `${value} is Negative`
    }
    else{
        res = `${value} is Nan`
    }
    document.getElementById('res').innerHTML= res;
}
