const themeSwitch = document.querySelector(".themeSwitch")
const bodyTheme = document.querySelector("body")
const linkTheme = document.querySelectorAll("a")

themeSwitch.addEventListener('click', switchTheme)

function switchTheme() {
    bodyTheme.classList.toggle("darkmode") // Si non, cache le texte
    for (let i = 0; i < linkTheme.length; i++) {
        linkTheme[i].classList.toggle("darkmode") // Si non, cache le texte
    }
}