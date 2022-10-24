const inputNumber = document.querySelector('#cardNumber');
const inputName = document.querySelector('#username');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const inputCvc = document.querySelector('#cvc');
const btn = document.querySelector('#btn');
const form = document.querySelector('#formCon');
const card = document.querySelector('.number');
const cardName = document.querySelector('.cardName');
const month = document.querySelector('.expMonth');
const year = document.querySelector('.expYear');
const numb = document.querySelector('.numb');
const error = document.querySelector('#error')
const give = document.querySelector('#give')



function keep(e){
    let messages = []
    if (inputName.value === "" || inputName.value == null) {
        messages.push("Can't be blank")
    }


    if (messages.length > 0) {

        e.preventDefault();
        error.innerHTML = messages.join(',')
        // inputNumber.value = "";
        // inputName.value = "";
        // inputMonth.value = "";
        // inputYear.value = "";
        // inputCvc.value = "";



    }
}



function text(){
    card.innerHTML = inputNumber.value
    cardName.innerHTML = inputName.value
    month.innerHTML = inputMonth.value
    year.innerHTML = inputYear.value
    numb.innerHTML = inputCvc.value

    
}



btn.addEventListener('click', text)
form.addEventListener('submit', keep)