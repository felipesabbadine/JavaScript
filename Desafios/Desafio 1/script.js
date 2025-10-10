
function carregar( ) {
   var txt = document.getElementById('txt')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    
    txt.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //Bom dia!!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#E8EB4D'
        document.body.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#EA9703'
    } else {
        //Boa Noite
        img.src = 'imagens/noite.jpg'
    }
}