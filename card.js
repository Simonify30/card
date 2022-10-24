const form = document.querySelector('#formCon');
const crdName = document.querySelector('.cardName');
const inputName = document.querySelector('#username');
const card = document.querySelector('.number');
const inputNumber = document.querySelector('#cardNumber');
const inputMonth = document.querySelector('#month');
const month = document.querySelector('.expMonth');
const inputYear = document.querySelector('#year');
const year = document.querySelector('.expYear');
const inputCvc = document.querySelector('#cvc');
const numb = document.querySelector('.numb');
const btn = document.querySelector('button')
const reset = document.querySelector('#reset')
const error = document.querySelector('#error')
const err = document.querySelector('#err')
const dat = document.querySelector('#dat')
const yar = document.querySelector('#yar')
const give = document.querySelector('#give')
const complete = document.querySelector('.complete')
let reg = /^[\d,\s,\+\-]{5,20}/;







function formBtn(e){
    e.preventDefault();

    if (inputName.value == ""){
        error.innerText = "can't be blank"
        error.style.color = "hsl(0, 100%, 66%)";
    } else {
        error.innerText = "" 
        crdName.innerText = inputName.value

    }

    if (inputNumber.value == ""){
        give.innerText = "can't ba blank"
        give.style.color = "hsl(0, 100%, 66%)";
    }
    
    else if (inputNumber.value.match(reg) && inputNumber.value.length == 16){
        give.innerText = "valid";
        give.style.color = "green";
        give.style.letterspacing
        card.innerText = inputNumber.value

    } else {
        give.innerText = "wrong format, numbers only"

    }
    
    
    if (inputMonth.value == ""){
        err.innerText = "can't ba blank"
        err.style.color = "hsl(0, 100%, 66%)";
    } 
    else if (inputMonth.value.length > 2){
        err.innerText = "invalid"
    
    }  else {
        err.innerText = ""
        month.innerText = inputMonth.value
    }
        
    if (inputYear.value == ""){
        yar.innerText = "can't ba blank"
        yar.style.color = "hsl(0, 100%, 66%)";
    } 
    else if (inputYear.value.length > 4 || inputYear.value.length < 4){
        yar.innerText = "invalid"
    
    }
    else {
        yar.innerText = ""
        year.innerText = inputYear.value
        
    }
    
    if (inputCvc.value == ""){
        dat.innerText = "can't ba blank"
        dat.style.color = "hsl(0, 100%, 66%)";
    } 
    else if (inputCvc.value.length > 3 || inputCvc.value.length < 3){
        dat.innerText = "invalid"
    
    }
    else {
        dat.innerText = ""
        numb.innerText = inputCvc.value
        
    }

    if (inputCvc.value === '' || inputMonth.value === '' || inputName.value === '' || inputNumber.value === '' || inputYear === ''){
        if (form.style.display === 'none'){
            form.style.display = 'block';
        } 
    

    }
    else {
        form.style.display = 'none'
        complete.style.display = 'block'
    }
}

reset.addEventListener('click', function(e) {
    if (complete.style.dislay === 'none'){
        // complete.style.display = 'block';

    } else {
        form.style.display = 'block';
        complete.style.display = 'none';
        inputName.value = '';
        inputNumber.value = '';
        inputMonth.value = '';
        inputYear.value = '';
        inputCvc.value = '';
        numb.innerText = '000';
        year.innerText = '00';
        month.innerText = '00';
        card.innerText = '0000 0000 0000 0000';
        crdName.innerText = 'Jane Appleseed';
        give.innerText = "";







    }
})



btn.addEventListener('click', formBtn)

