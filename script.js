const inputField = document.querySelectorAll("input")
const sendForm = document.querySelector("form")
const resetAll = document.querySelector(".button-erase")
const addStatus = document.querySelector(".add-success")

sendForm.addEventListener('submit', submitBook)

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
    setTimeout(() => {addStatus.classList.toggle("hidden")}, 5000) // Attendre 5 secondes pour cacher le texte
}