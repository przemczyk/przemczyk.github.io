'use strict';

let names = ['Monika', 'Krystian', 'Łukasz'];

console.log(names[1]);
let [name1, name2, name3] = names;
console.log(name3); // wyloguje Łukasz
console.log('długość', names.length);

names[3] = 'Tania';
names[2] = 'Ela';

names.push('Geralt'); // dodaje kolejny element do tablicy - zawsze jako ostatni
names.unshift('Jestem pierwszy'); // dodaje element do tablicy - jako pierwszy

console.log(names);
console.log('długość', names.length);
console.log('zmiany za pomocą push()', names);
names.shift() // usuwa pierwszy element z tablicy
console.log('zmiany za pomoca shift()', names);
names.pop() // usuwa ostatni element z tablicy
console.log('zmiany za pomocą pop()', names);



console.log('długość', names.length);

names.push("Kaja");

console.log('długość', names.length);

for (let i = 0; i < names.length; i++) {
    console.log('pierwszy for ', names[i]);
}


names.forEach((element, index) => {
    console.log('forEach', element, index)

})
// //names.forEach(function (element, i) {
// //    console.log('Element nr ' + i + ' = ' + element);
// //});




// let tablica['asia', 'ola', ['kowalska' , 'nowak']];
// tablica.forEach(items => {
//     if (typeof items === 'object') {
//         items.forEach(item => {
//             console.log(item)
//         })
//     }
// })








// //console.log( names.join(" - ") );




names.sort();
console.log(names);


names.reverse();
console.log(names);



console.log('Sprawdza czy podana zmienna jest tablicą', Array.isArray(names));




let menNames = ['Robert', 'Mariusz', 'Andrzej'];

let namesCollection = menNames.concat(names);

console.log(namesCollection);





// console.log("Podaje jaki index ma wskazana wartości", namesCollection.indexOf("Mariusz"));

// console.log("Sprawdza czy podana zminna jest tablicą ", Array.isArray(namesCollection)); //dodatek

console.log('slice', namesCollection, namesCollection.slice(2, 5)); // tworzy nowątablice i pobiera od 2 do 5 (-1)

namesCollection.splice(2, 3, "Julek", "Krzyś");
console.log(namesCollection); // dodaje elementy do tablicy


// console.log(namesCollection); //dodatek

// console.log(namesCollection.toString()); //dodatek

// /**
//  * sortowanie liczb
//  */
// let num = [1, 200, 40, 5]
// console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort()', num.sort())


// console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort() oraz dodadkowej funkcji ', num.sort(function (a, b) {
//     return a - b
// }))

// /* Filter i map */

let numbers = [1, 2, 3, 4];
let squares = numbers.map(function (elem) {
    return elem * elem;
});
console.log('po użyciu funkcji map()', squares);

let even = numbers.filter(function (elem) {
    return elem % 2 === 0;
});

// console.log("po użyciu funkcji filtr()", even);
// /**
//  * funkcja some() sprawdza czy dany element wytępuje w tablicy
//  * zwraca true lub false 
//  */
// function czyWiekszyNiz3(element) {
//     return element > 3
// }

// function czyWiekszyNiz10(element) {
//     return element > 10
// }

// console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 3 ', numbers.some(czyWiekszyNiz3))

// console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 10 ', numbers.some(czyWiekszyNiz10))


/**
 * funkcja every() sprawdza czy każdy element tablicy spełnia warunek
 */
let wiekszeOd40 = (element) => element > 40

console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt większy od 40 ',
    numbers.every(wiekszeOd40))
console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt mniejsze od 5 ',
    numbers.every(element => element < 5))

let kwota = 2.5553234
let euro = kwota.toLocaleString('de', {
    style: "currency",
    currency: "EUR",
    currencySign: "accounting"
})
console.log("TCL: euro", euro)

let dolar = kwota.toLocaleString('usd', {
    style: "currency",
    currency: "USD",
    currencySign: "accounting"
})
console.log("TCL: dolar", dolar)

let yen = kwota.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
})
console.log("TCL: yen", yen)

let zloty = kwota.toLocaleString('pl', {
    style: 'currency',
    currency: 'PLN'
})
console.log("TCL: zloty", zloty)

let dwaMiejscaPoPrzecinku = kwota.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinku)
let nowaLiczba = 2.0
let dwaMiejscaPoPrzecinkuInaczej = nowaLiczba.toLocaleString('de', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinkuInaczej)