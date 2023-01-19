const addition = document.querySelector('#addition');
const substraction = document.querySelector('#substraction');
const multipication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const inputFirstNumber = document.querySelector('.inputFirstNumber');
const inputSecondNumber = document.querySelector('.inputSecondNumber');

addition.addEventListener('click', function() {
    let theSum = 0;

    theSum = Number(inputFirstNumber.value) + Number(inputSecondNumber.value);

    document.querySelector('#total').innerHTML = theSum
})

substraction.addEventListener('click', function() {
    let theDifference = 0;

    theDifference = Number(inputFirstNumber.value) - Number(inputSecondNumber.value);

    document.querySelector('#total').innerHTML = theDifference
})

multipication.addEventListener('click', function() {
    let theMultiply = 0;

    theMultiply = Number(inputFirstNumber.value) * Number(inputSecondNumber.value);

    document.querySelector('#total').innerHTML = theMultiply
})

division.addEventListener('click', function() {
    let theQuotient = 0;

    theQuotient = Number(inputFirstNumber.value) / Number(inputSecondNumber.value);

    document.querySelector('#total').innerHTML = theQuotient
})