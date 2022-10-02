import book from "./object.js"

const favoriteBook = new book(
    "Everyday Backpack",
    "Cham",
    123,
    "2022",
    30,
    1,
    "new"
) 

document.body.innerHTML = `
<h1>Book title : ${favoriteBook.title}</h1>  
`
const navigationContent = '<li><a href="https://www.google.com">Home</a></li> <li>About</li> <li>Setting</li>'

const nvElement = document.createElement('ul')
nvElement.classList.add('test')
nvElement.innerHTML = navigationContent

document.querySelector('h1').prepend(nvElement);