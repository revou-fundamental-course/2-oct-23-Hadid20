let cInput = document.querySelector('#celcius > input');
let fInput = document.querySelector('#fahrenheit > input');

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

cInput.addEventListener('input', function(){
    let cTemp = parseFloat(cInput.value)
    let ftemp = (cTemp*(9/5))+32
    
    fInput.value = roundnumber(ftemp)
})

fInput.addEventListener('input', function(){
    let fTemp = parseFloat(fInput.value)
    let cTemp = (fTemp-32) * (5/9)
    
    cInput.value = roundnumber(cTemp)
})

btn.addEventListener('click', ()=>{
    cInput.value=""
    fInput.value=""
})