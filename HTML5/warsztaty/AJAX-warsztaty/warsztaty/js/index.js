@ @ - 0, 0 + 1, 14 @ @

function oblicz() {
    let wpłata = parseInt(document.getElementById('wplata').value)
    let okresKapitalizacji = parseInt(document.getElementById('kapital').value)
    let iloscRat = parseInt(document.getElementById('rata').value)
    let oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)

    console.log(typeof wplata);

}

function odsetki(wplata, okresKapitalizacji, iloscRat, oprocentowanie) {
    let suma = wplata * Math.pow(1 + (oprocentowanie / okresKapitalizacji), iloscRat * okresKapitalizacji);
    let a = wplata * Math.pow((1 + oprocentowanie / 100), )
}