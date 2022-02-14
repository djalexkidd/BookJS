const listItems = document.querySelector('.list-items');
const noBook = document.querySelector('.no-book');

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

// Boucler sur l'objet
function loadHTML() {
    if(!window.localStorage.getItem('data')) return
    const data = JSON.parse(window.localStorage.getItem('data'))
    bookList = data;
    Object.keys(bookList).map(key => createHTML(bookList[key], key));
    noBook.classList.toggle("hidden") // Affiche le texte pour dire que le livre à été enregistré
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
}