let cardContainer = document.getElementById('card-container');
let buttonContainer = document.getElementById('button-container');

const func = async () => {
    let a = await fetch('https://backend-app-2gpt.onrender.com/api/book/getAllBooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    a = await a.json();

    console.log(a.books[0].book_name)

    for (let i = 0; i < a.books.length; i++) {
        cardContainer.innerHTML = cardContainer.innerHTML + `<div class="card mx-2 my-2" style="width: 18rem; border: 2px solid black">
        <img src="https://media.istockphoto.com/id/1323719436/video/animation-of-falling-green-pink-and-yellow-books-on-blue-background.jpg?s=640x640&k=20&c=GIoNa7hRw0Ozlk8iRFj4IJDAme8OPHQVyDpElELnRaI=" height="200px" class="card-img-top" alt="...">
        <span style="position: absolute; top: -10px; right: 10px" class="badge text-bg-danger">Price - ${a.books[i].price}</span>
        <div class="card-body" style="height: 200px">
          <strong class="card-title">${a.books[i].book_name}</strong>
          <p class="card-text">Author: ${a.books[i].author}</p>
          <div class="height: 100px">
            <button type="button" style="position: absolute; bottom: 10px;" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">Explore</button>
          </div>
    </button>
    
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${a.books[i].book_name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div >
                <img height="100px" style="border-radius: 5px" src="https://media.istockphoto.com/id/1323719436/video/animation-of-falling-green-pink-and-yellow-books-on-blue-background.jpg?s=640x640&k=20&c=GIoNa7hRw0Ozlk8iRFj4IJDAme8OPHQVyDpElELnRaI=">
            </div>
            <span class="badge text-bg-danger">Price - ${a.books[i].price}</span>
            <span class="badge text-bg-warning">Author - ${a.books[i].author}</span>
                <br>
                <span class="badge text-bg-primary">Format - ${a.books[i].format}</span>
                <br>
                <span class="badge text-bg-success">Rating - ${a.books[i].rating}</span>
                <br>
                <span class="badge text-bg-success">Book Owner - ${a.books[i].name}</span>
                <br>
                <span class="badge text-bg-success">Contact - ${a.books[i].contact}</span>
                <br>
                <span class="badge text-bg-success">Contact - ${a.books[i].email}</span>
        </div>
        <div class="modal-footer">
            <a href="../templates/buy.html"<button type="button" class="btn btn-primary">Buy</button></a>
            <a href="../templates/rent.html"<button type="button" class="btn btn-success">Rent</button></a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>`
    }
}

func()



buttonContainer.innerHTML = `<a id="logout" href="../templates/profile.html"><button class="btn btn-warning mx-2" type="submit">${localStorage.getItem('details').split(',')[0]}</button></a>`