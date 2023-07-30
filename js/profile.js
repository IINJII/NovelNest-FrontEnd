let name = document.getElementById('name');
let email = document.getElementById('email');
let contact = document.getElementById('contact');
let items = document.getElementById('items');
let submit = document.getElementById('submit');
let format = document.getElementById('format');
let rating = document.getElementById('rating');
let availability = document.getElementById('availability');
let author = document.getElementById('author');
let book_name = document.getElementById('book_name');
let logout = document.getElementById('logout')
let price = document.getElementById('price');
let sale = document.getElementById('sale');
let points = document.getElementById('points');

name.innerText = localStorage.getItem('details').split(',')[0]
email.innerText = localStorage.getItem('details').split(',')[1]
contact.innerText = localStorage.getItem('details').split(',')[2]




submit.addEventListener('click', async () => {
    let a = await fetch('https://backend-app-2gpt.onrender.com/api/book/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: localStorage.getItem('details').split(',')[0], email: localStorage.getItem('details').split(',')[1], contact: localStorage.getItem('details').split(',')[2], book_name: book_name.value, author: author.value, format: format.value, availability: availability.value, rating: rating.value, price: price.value })
    })

    a = await a.json();
    console.log(a);
})





let func = async () => {
    let a = await fetch('https://backend-app-2gpt.onrender.com/api/book/fetchAllBooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: localStorage.getItem('details').split(',')[0] })
    })
    a = await a.json()

    console.log(a.book);

    points.innerText = a.book.length * 10;

    for (let i = 0; i < a.book.length; i++) {
        items.innerHTML = items.innerHTML + `<li class="d-flex"><a class="dropdown-item">${a.book[i].book_name}</a></li>`
    }

    for (let i = 0; i < a.book.length; i++) {
        sale.innerHTML = sale.innerHTML + `<li class="list-group-item">${a.book[i].book_name}</a><span><i style="position: absolute; right: 5px; padding: 5px" id="it" class="fa-solid fa-trash" style="color: #ff0000; padding-right: 5px"></i></span></li>`
    }

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', async (e) => {
            let a = await fetch('https://backend-app-2gpt.onrender.com/api/book/deleteBook', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ book_name: e.target.innerText})
            })
        })
    }
}

func()




logout.addEventListener('click', () => {
    location.href = '../index.html'
    localStorage.removeItem('token');
    localStorage.removeItem('details')

})



let li = document.getElementsByTagName('li');

