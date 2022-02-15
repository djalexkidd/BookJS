const inputField = document.querySelectorAll("input")
const sendForm = document.querySelector("form") // Bouton pour envoyer le formulaire
const resetAll = document.querySelector(".button-erase") // Bouton pour effacer le formulaire
const factoryReset = document.querySelector(".button-eraseall") // Bouton pour effacer le formulaire
const listItems = document.querySelector('.list-items') // Liste des livres
const noBook = document.querySelector('.no-book') // Texte quand il n'y a pas de livre dans la liste

const bookTitle = document.querySelector(".book-title") // Champ du titre
const bookAuthor = document.querySelector(".book-author") // Champ de l'auteur
const bookPages = document.querySelector(".book-pages") // Nombre de pages

sendForm.addEventListener('submit', submitBook)

// On créé un objet qui va nous permettre d'exploiter des données
let bookList = {}

// Efface le formulaire
resetAll.addEventListener('click', (e) => {
    e.preventDefault() // N'actualise pas la page
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = ""
    }
})

// Efface le formulaire
factoryReset.addEventListener('click', (e) => {
    e.preventDefault()
    bookList = {}
    saveObj()
    location.reload()
})

// Envoyer les informations du livre
function submitBook(e) {
    e.preventDefault() // N'actualise pas la page

    const timestamp = Date.now()
    bookList[timestamp] = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: bookPages.value
    }

    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = "" // Efface le formulaire
    }

    createHTML(bookList[timestamp], timestamp)
    saveObj()
}

// Boucler sur l'objet
function loadHTML() {
    if(!window.localStorage.getItem('data')) return
    const data = JSON.parse(window.localStorage.getItem('data'))
    bookList = data
    Object.keys(bookList).map(key => createHTML(bookList[key], key))
    checkBookNumber()
}

// Charge les éléments de la liste quand la page est chargée
window.addEventListener('load', loadHTML)

function createHTML(objet, key) {
    if(!objet.title) return
    const html = `
            <span>${objet.title} par ${objet.author} (${objet.pages} pages)</span>
            <button name="edit" class="edit">✏️</button>
            <button name="trash" class="trash">❌</button>
    `

    const li = document.createElement('li')
    li.classList.add('item')
    li.setAttribute('data-key', key)
    li.innerHTML = html
    listItems.insertBefore(li, listItems.firstChild)

    li.children.trash.onclick = toBin
    li.children.edit.onclick = editBook

    checkBookNumber()
}

// Supprime une entrée dans la liste
function toBin() {
    this.parentNode.remove()
    const key = this.parentNode.getAttribute('data-key')
    delete bookList[key]
    saveObj()
    checkBookNumber()
}

// Sauvegarde l'objet dans le LocalStorage
function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(bookList))
}

// Cette fonction vérifie si un livre est présent dans la liste
function checkBookNumber() {
    if (Object.keys(bookList).length === 0) {
        noBook.classList.remove("hidden") // Si oui, affiche le texte pour dire qu'il n'y a pas de livre
    }
    else {
        noBook.classList.add("hidden") // Si non, cache le texte
    }
}

// Éditer une entrée dans la liste
function editBook() {
    const key = this.parentNode.getAttribute('data-key')
    bookTitle.value = bookList[key].title
    bookAuthor.value = bookList[key].author
    bookPages.value = bookList[key].pages

    this.parentNode.remove()
    delete bookList[key]

    checkBookNumber()
}