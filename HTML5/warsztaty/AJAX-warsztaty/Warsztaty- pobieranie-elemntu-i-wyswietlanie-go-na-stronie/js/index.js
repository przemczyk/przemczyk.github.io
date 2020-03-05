fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        // console.log('res', res);
        const allPosts = document.getElementById('all-posts')
        let ulPost = document.createElement('ul')
        ulPost.setAttribute('class', 'all-post-ul all-post-ul__bg')
        res.forEach(element => {
            let liPost = document.createElement('li')
            liPost.setAttribute('class', 'all-post-li')
            liPost.innerHTML = element.name
            ulPost.appendChild(liPost)
            // console.log('liPost', liPost)
            liPost.onclick = () => {
                detalUser(element)
            }
            ulPost.appendChild(liPost)
        })
        allPosts.appendChild(ulPost)
    })

function detalUser(user) {
    // console.log('aa -> user', user);
    let onePost = document.getElementById('one-post')
    let h1 = createElement('h1', '', "Dane użytkownika")
    let name = createElement('span', 'view-name', user.name)
    // let city = createElement('p', 'view-city', user.city)
    const allAdres = 'adres: ' + user.address.street + ' ' + user.address.suite + ' ' + user.address.zipcode + ' ' + user.address.city
    let city = createElement('p', 'view-city', allAdres)
    onePost.appendChild(h1)
    onePost.appendChild(name)
    onePost.appendChild(city)

}

function createElement(tag, className, val) {
    let = newElement = document.createElement(tag)
    newElement.setAttribute('class', className)
    newElement.innerHTML = val
    return newElement
}