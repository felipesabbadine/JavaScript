let num = document.getElementById('numtxt')
let lista =  document.getElementById('selec')
let res = document.querySelector('div#res')

let vetores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, 1) {
    if (1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo Ok') 
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
}