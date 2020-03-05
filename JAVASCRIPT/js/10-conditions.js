'use strict';

let userOneHeight = 190;
let userTwoHeight = 190;


/*

Warunek if

*/
if (userTwoHeight < userOneHeight) {
    console.log("Olga jest niższa :)");
}



/*

Warunek if else

*/
// let dzien = "wtorek"
// if (dzien === "poniedzialek") {

//     console.log("Znowu do roboty");

// } else {

//     console.log("dobrz ze nie poniedzialek");

// }


let data = new Date()
console.log('data :', data);

let dzien = data.getDay()
console.log('dzien: ', dzien);

if (dzien === 1) {

    console.log("Znowu do roboty");

} else if (dzien === 6) {

    console.log("hura sobota dzien na nauke programowania");

}


/*

Warunek if else if

*/
if (userTwoHeight > userOneHeight) {

    console.log("Olga jest wyższa :)");

} else if (userTwoHeight == userOneHeight) {

    console.log("Olga tak wysoka jak Mateusz");

} else {

    console.log("Olga jest niższa");

}




/*

Warunek switch

*/
switch (dzien) {
    case 1:
        console.log('poniedzialek');
        break;
    case 6:
        console.log('sobota');
        break;
    default:
        console.log('Inny dzień');


}