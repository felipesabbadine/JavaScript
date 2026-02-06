const links = document.querySelectorAll(".links")
const side = document.getElementById("sidebar")
const closea = document.getElementById("arrowc")
const opena = document.getElementById("arrowo")
function abrirnav() {
 side.style.width = "250px"
 opena.style.display = "none"
 closea.style.display = "block"
 links.forEach(link => {
    link.style.display = "block"
 })
}

function fecharnav() {
    links.forEach(link => {
        link.style.display = "none"
    })
    side.style.width = "50px"
    closea.style.display = "none"
    opena.style.display = "block"
}