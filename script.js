const inputField = document.querySelectorAll("input")
const sendForm = document.querySelector("form")
const resetAll = document.querySelector(".button-erase")
const addStatus = document.querySelector(".add-success")
const listItems = document.querySelector('.list-items');
const noBook = document.querySelector('.no-book');

const bookTitle = document.querySelector(".book-title")
const bookAuthor = document.querySelector(".book-author")
const bookPages = document.querySelector(".book-pages")

sendForm.addEventListener('submit', submitBook)

// On créé un objet qui va nous permettre d'exploiter des données
let bookList = {
    book1: {
        title : "1984",
        author: "George Orwell",
        pages: "328"
    },
    book2: {
        title : "Comment cuisiner des pâtes",
        author: "Philippe Etchebest",
        pages: "420"
    },
    book3: {
        title : "Biographie de Eddy Malou",
        author: "Eddy Malou",
        pages: "69"
    }
}

// Efface le formulaire
resetAll.addEventListener('click', (e) => {
    e.preventDefault() // N'actualise pas la page
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = ""
    }
})

// Envoyer les informations du livre
function submitBook(e) {
    e.preventDefault() // N'actualise pas la page
    addStatus.classList.toggle("hidden") // Affiche le texte pour dire que le livre à été enregistré

    const timestamp = Date.now();
    bookList[timestamp] = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: bookPages.value
    }

    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = "" // Efface le formulaire
    }

    createHTML(bookList[timestamp], timestamp);
    saveObj();

    setTimeout(() => {addStatus.classList.toggle("hidden")}, 5000) // Attendre 5 secondes pour cacher le texte
}

// Boucler sur l'objet
function loadHTML() {
    if(!window.localStorage.getItem('data')) return
    const data = JSON.parse(window.localStorage.getItem('data'))
    bookList = data;
    Object.keys(bookList).map(key => createHTML(bookList[key], key));
    noBook.classList.toggle("hidden") // Affiche le texte pour dire que le livre à été enregistré
    checkBookNumber()
}

window.addEventListener('load', loadHTML);

function createHTML(objet, key) {
    if(!objet.title) return;
    const html = `
            <span>${objet.title} par ${objet.author} (${objet.pages} pages)</span>
            <button name="trash" class="trash">🗑️</button>
    `

    const li = document.createElement('li');
    li.classList.add('item');
    li.setAttribute('data-key', key);
    li.innerHTML = html;
    listItems.insertBefore(li, listItems.firstChild);

    li.children.trash.onclick = toBin;

    checkBookNumber()
}

function toBin() {
    this.parentNode.remove();
    const key = this.parentNode.getAttribute('data-key');
    delete bookList[key];
    saveObj();
    checkBookNumber()
}

function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(bookList));
}

function checkBookNumber() {
    if (Object.keys(bookList).length === 0) {
        noBook.classList.remove("hidden")
    }
    else {
        noBook.classList.add("hidden")
    }
}