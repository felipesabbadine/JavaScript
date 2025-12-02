


function enviar() {
    var nome1 = document.getElementById('nometxt').value
    var nome2 = document.getElementById('conametxt').value

    if(nome1 === nome2){
        window.alert('E igual')
    } else {
        window.alert('Não e igual')
    }
}