$(function () {

    let priceTable = [{
            id: 1,
            price: 29
        },
        {
            id: 2,
            price: 32
        },
        {
            id: 3,
            price: 41
        },
        {
            id: 4,
            price: 39
        },
        {
            id: 5,
            price: 36
        }

    ];

    $('#pizza').change(function () {

        let pizzaType = $(this).val()
        console.log("pizzaType", pizzaType)
        let spanPrice = $('#price')
        if (pizzaType == 0) {
            spanPrice.text("0 PLN")
        }
        priceTable.forEach(item => {
            if (item.id == pizzaType) {
                spanPrice.text(item.price + " PLN")
            }
        })

    })


    $('#pizza-order').submit(function (e) {
        e.preventDefault()
        let name = $('#name').val()
        let surname = $('#surname').val()

        let street = $('#street').val()
        let flatNr = $('#flatNr').val()

        let postalCode = $('#postalCode').val()
        let city = $('#city').val()

        let pizza = $('#pizza').val()


        let tomatoSauce = $('#tomato-sauce').is(':checked')
        let garlicSauce = $('#garlic-sauce').is(':checked')

        let agree = $("#agree").is(':checked')

        let error = []
        if (pizza === 0) {
            error.push('Wybierz pizze')
        }
        if (name === '') {
            error.push('Podaj imię')
        }
        if (surname === '') {
            error.push('Podaj nazwisko')
        }
        if (street === '') {
            error.push('Wpisz ulicę')
        }
        if (flatNr === '') {
            error.push('Podaj numer domu')
        }
        if (postalCode === '') {
            error.push('Podaj kod pocztowy')
        }
        if (city === '') {
            error.push('Wpisz miasto')
        }
        if (tomatoSauce === false && garlicSauce === false) {
            error.push('Wybierz sos')
        }
        if (agree === false) {
            error.push('Zaznacz zgodę')
        }
        console.log(error);

        error.forEach(item => {
            let err = "<li>" + item + "</li>"
            $('#errors').append(err)
        })

        let zamowienie = {
            name: name + ' ' + surname,
            city: city,
            sosy: [tomatoSauce, garlicSauce]
        }
        console.log('zamowienie', zamowienie);

    })



})