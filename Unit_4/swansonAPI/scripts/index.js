// ! Global Variables
const image = document.querySelector('div')
const h3 = document.querySelector('h3')
const baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'

// ! Event Listener
image.addEventListener('click', e => {
    getQuote();
})

// ! Display function

const getQuote = async() => {
    // console.log('TEST')
    fetch(baseURL)
    .then(response => response.json())
    .then(object => {
        console.log(object);
    })
}