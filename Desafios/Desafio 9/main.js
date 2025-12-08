

var h = document.getElementsByTagName("h2") 

document.querySelectorAll(".text").forEach((T) => {
    T.addEventListener("mouseover", () => {
        
        T.style.backgroundColor = '#6CE0E0'
        T.style.transform = "scale(1.1)"
        T.style.transition = "0.7s"
    })
})

document.querySelectorAll(".text").forEach((t) => {
    t.addEventListener("mouseout", () => {
        t.style.backgroundColor = "#e7fdf6"
        t.style.transform = "scale(1)"
        t.style.transition = "0.7s"
    })
})