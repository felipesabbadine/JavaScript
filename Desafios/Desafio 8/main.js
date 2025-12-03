


function enviar() {
    var nome1 = document.getElementById('nometxt').value
    var nome2 = document.getElementById('conametxt').value
    var res = document.getElementById('res')

    if(nome1 === nome2){
       res.innerHTML = `Bem-vindo ${nome2}, e bom te ter de aqui!` 
    } else {
        window.alert('')
    }
}