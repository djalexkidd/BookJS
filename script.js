const inputField = document.querySelectorAll("input")
const sendForm = document.querySelector("form")
const resetAll = document.querySelector(".button-erase")
const addStatus = document.querySelector(".add-success")

const bookTitle = document.querySelector(".book-title")

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
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = "" // Efface le formulaire
    }

    const timestamp = Date.now();
    bookList[timestamp] = {
        title: bookTitle.value
    }
    saveObj();

    setTimeout(() => {addStatus.classList.toggle("hidden")}, 5000) // Attendre 5 secondes pour cacher le texte
}

function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(bookList));
}