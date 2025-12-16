var menu = document.getElementById("menu")
var link = document.getElementById("links")


function interagir() {
    if(link.style.display === "block") {
        link.style.display = "none"
        link.style.transition = "ease-in-out 0.8s"
    } else {
        link.style.display = "block"
        link.style.transition = "ease-in-out 0.8s"
    }
}