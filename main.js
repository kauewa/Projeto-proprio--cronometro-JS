const elementSecond = document.getElementById('seconds')
const elementTens = document.getElementById('tens')
const start = document.getElementById('button-start')
const Stop = document.getElementById('button-stop')
const reset = document.getElementById('button-reset')
var timer

start.onclick = function() {
    clearInterval(timer);
    timer = setInterval(controleTens, 10);
}

Stop.onclick = function(){
    clearInterval(timer)
}

reset.onclick = function(){
    clearInterval(timer)
    elementSecond.innerHTML = '00'
    elementTens.innerHTML = '00'
}

function controleTens(){ 
    if(parseInt(elementTens.innerHTML) <= 9){
        elementTens.innerHTML = '0' + (parseInt(elementTens.innerHTML) + 1)
    }
    
    if(parseInt(elementTens.innerHTML) > 9){
        elementTens.innerHTML = parseInt(elementTens.innerHTML) + 1
    }
    
    if (parseInt(elementTens.innerHTML) > 99){
        elementSecond.innerHTML = '0' + (parseInt(elementSecond.innerHTML) + 1) 
        elementTens.innerHTML = '00'
    }

    if(parseInt(elementSecond.innerHTML) > 9){
        elementSecond.innerHTML = parseInt(elementSecond.innerHTML)  
    }
     
}


