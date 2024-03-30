const API_URL = "https://dummyjson.com/carts"
let products_wrapper = document.getElementById('products-wrapper')
const modalWindow = document.getElementById('modal-window')
const modalWindowBody = document.getElementById('modal-window-body')
const modalWindowContent = document.getElementById('window-content')
const closeModal = document.getElementById('close')

// const button = document.getElementById('my-btn')


// function handleClick(event) {
//     event.preventDefault()
//     console.log('Click!')
// }
// button.addEventListener('click',handleClick)

async function handleLoadedState() {
    const response = await fetch(API_URL)
    // JSON => JavaScript
    const data = await response.json()



    for (let i = 0; i < data.carts.length; i++) {

        for (let product of data.carts[i].products) {

            const card =
                `<div class="card m-1" style="width: 22rem;">
        <img 
                style = "height: 25rem;"
                src="${product.thumbnail}" 
                class="card-img-top" 
                alt="${product.title}"

    />
    <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${product.title}</h5>
        <a data-image="${product.thumbnail}" data-discountedprice="${product.discountedPrice}" data-price="${product.price}" data-title="${product.title}" href="detail.html" id="detail-btn" class="btn btn-primary">More info</a>
       
    </div>
</div>`
            products_wrapper.innerHTML += card
        }

    }


    function handleClose() {
        modalWindow.style.display = 'none'
        modalWindowBody.style.display = 'none'
    }


    function handleClick(event) {
        event.preventDefault()
        const price = event.target.dataset.price
        const title = event.target.dataset.title
        const discountedPrice = event.target.dataset.discountedprice
        const image = event.target.dataset.image

        modalWindowContent.innerHTML = `

        <img style="width: 250px; margin-bottom: 15px;" src="${image}" width="100px" />
        <p>
                <strong>${title}</strong
        </p>
        <br>
        <br>
        <p>
                 Discounted price: <strong style="text-decoration: line-through;">${Number(price).toFixed(2)}$</strong>
                <br>
                Price: <strong>${Number(discountedPrice).toFixed(2)}$</strong>
      </p>
    `

        modalWindow.style.display = 'block'
        modalWindowBody.style.display = 'block'

    }

    closeModal.addEventListener('click', handleClose)


    const buttons = document.querySelectorAll('#detail-btn')
    buttons.forEach(button => button.addEventListener('click', handleClick))


}


window.addEventListener('DOMContentLoaded', handleLoadedState)

// Add a card componenet that shows product details on click
// Add pagination to a website











