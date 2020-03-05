'use strict'

let number = 10;

function addNumber() {
    let number = 15;
    let newNumber = 20;
    console.log(number); //zmienna lokalna tylko wewnątrz funkcji
    console.log(newNumber); //zmienna lokalna tylko wewnątrz funkcji


}

addNumber();

console.log(number); //wuloguje zmienna globalną
console.log(newNumber); // błąd bo nie mamy dostępu do tej zmiennej