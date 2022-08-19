function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }

    else{
        return getPin();
    }
}



function generatePin(){
   
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generatePin').addEventListener('click',function(){
    const pin = getPin();
    
    const displayPin = document.getElementById('display-pin');
    displayPin.value =pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const digit = event.target.innerText;
     
    const displayInput = document.getElementById('display-input'); 
    const perviousTypeNumber = displayInput.value;
    if(isNaN(digit)){
        
        if(digit === "C"){
            displayInput.value = '';
        }

        else if( digit === "<"){
            const newDigit = perviousTypeNumber.split('');
            newDigit.pop();
            const remainingDigit = newDigit.join('');
            displayInput.value = remainingDigit;

        }
    }

    else{
        
        const newTypeNumber = perviousTypeNumber + digit;
        displayInput.value = newTypeNumber;
    }
})


document.getElementById("btn-sub").addEventListener('click',function(){
    const pin = document.getElementById('display-pin');
    const currentPin = pin.value;

    const inputPin = document.getElementById('display-input');
    const userPin = inputPin.value;


    const varifyYes = document.getElementById('varifyYes');
    const varifyNo =document.getElementById('varifyNo');
    if(currentPin == userPin){       
        varifyYes.style.display = 'block'
        varifyNo.style.display = 'none';  
    }

    else{
        varifyNo.style.display = 'block';
        varifyYes.style.display = 'none';
    }
})
