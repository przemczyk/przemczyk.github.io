'use strict';

function multiply(param1, param2, param3) {

    let result;

    result = param1 * param2 * param3;

    return result;

}
let multiplyResult = multiply(3, 6, 10);
let drugieDzialanie = multiply(2, 4, 7);

console.log('Wynik:multiplyResult', multiplyResult);
console.log('Wynik: ', drugieDzialanie);



function add(param1, param2) {

    let result;

    result = param1 + param2;

    return result;
}

let dodawanie = add(4, 22);
console.log('Wynik', dodawanie);




function dodawanie2() {
    let wynik;
    wynik = 2 * 2;
    return wynik;
}

dodawanie2()

let functionExpression = function () {
    let wynik;
    wynik = 2 + 2;
    return wynik;
};

functionExpression()

console.log(functionExpression());






let arrowFunction = () => {
    return 'Jestem w akcji';
}

console.log(arrowFunction());




debugger
let dzialanie = (param1, param2, param3, kolejnyParam) => {

    let wynik = param1 * param2 * param3 + kolejnyParam;

    return wynik;

}

let wynikDzialanie = dzialanie(4, 10, 2, 2);
console.log('Wynik : ', dzialanie());