const themeSwitch = document.querySelector(".themeSwitch")
const bodyTheme = document.querySelector("body")
const linkTheme = document.querySelectorAll("a")
const items = document.querySelectorAll(".list-items")
const imgTheme = document.querySelector("img")

themeSwitch.addEventListener('click', switchTheme)

function switchTheme() {
    bodyTheme.classList.toggle("darkmode")
    imgTheme.classList.toggle("darkmode-img")
    for (let i = 0; i < linkTheme.length; i++) {
        linkTheme[i].classList.toggle("darkmode")
    }
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("darkmode")
    }
}