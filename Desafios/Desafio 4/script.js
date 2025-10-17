var n1 = document.getElementById('input1')
var n2 = document.getElementById('input2')
var vez = document.getElementById('input3')
var res = document.getElementById('res')

function calcular() {
    if (n1.value.lenght == 0 || n2.value.lenght == 0 || vez.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(vez.value)

        if (i < f) {
            for(let c = i; c <= f; c +=p) {
           res.innerHTML += `${c} 🖝`
            }
            res.innerHTML += `🏳️`
        } else {
            for ( let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ☚`
            }  
            res.innerHTML += `🏳️`
        }
    }

}