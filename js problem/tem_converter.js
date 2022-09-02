const convert = () => {
    let c = document.getElementById('data').value 
    let f = c*1.8+32 
    let res = document.getElementById('res').innerHTML = Math.floor(f)
    // console.log(f)
}

