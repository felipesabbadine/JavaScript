function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/criança-M.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-M.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-M.jpg')

            } else {
                img.setAttribute('src', 'imagens/idoso-M.jpg')

            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src',  'imagens/criança-F.jpg')

            } else if (idade < 21) {
                img.setAttribute('src',  'imagens/jovem-F.jpg')

            } else if (idade < 50) {
                img.setAttribute('src',  'imagens/adulto-F.jpg')

            } else {
                img.setAttribute('src', 'imagens/idoso-F.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}