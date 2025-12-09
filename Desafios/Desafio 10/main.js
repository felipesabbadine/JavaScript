document.querySelectorAll(".text").forEach((t) => {
    t.addEventListener("mousedown", () => {
        t.style.transform = "scale(1.1)"
        t.style.transition = "0.8s"
    })
})


document.querySelectorAll(".text").forEach((T) => {
    T.addEventListener("mouseup", () => {
        T.style.transform = "scale(1.0)"
    })
})
