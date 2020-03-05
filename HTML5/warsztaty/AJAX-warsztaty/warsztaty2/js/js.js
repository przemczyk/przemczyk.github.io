$(function () {

    $('#tabela-select').change(function () {
        let tabelNbp = $(this).val()
        console.log('createTable -> tabelaNbp', tabelNbp);
        fetch(`http://api.nbp.pl/api/exchangerates/tables/${tabelNbp}?format=json`)
            .then(res => res.json())
            .then(res => {
                const notowania = res[0].rates
                let tabela = res[0].table
                let allRates = $('#all-rates')
                allRates.empty()
                let olElement = $('<ol></ol>')

                notowania.forEach(item => {
                    let walutOpis = item.currency + ' ' + item.code + ' ' + item.bid
                    let liElement = createElement('li', walutOpis)
                    olElement.append(liElement)

                })
                allRates.append(olElement)


            })
    })

    function createElement(tag, val) {
        let element = document.createElement(tag)
        element.innerHTML = val
        return element;
    }

})