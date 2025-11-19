
let per2 = document.getElementById('pergunta2').style.display = 'none'
    let lembrar = {
        nome: document.getElementById('nometxt'),
        idade: document.getElementById('idadetxt'),
    }

// Primeira mensagem

function marcar() {
    let resposta1 = document.querySelector('section#resposta')
    let lembrar = {
        nome: document.getElementById('nometxt').value,
        idade: document.getElementById('idadetxt'),
    }
    resposta1.innerHTML = `Hmm, ${lembrar.nome}. É um bom nome.`
    document.querySelector('section#pergunta2').style.display = 'block'
    let sent1 = document.getElementById('sent1').style.display = 'none'
}

// Segunda mensagem

function enviar() {
    var vlridade = document.getElementById('idadetxt')
    var idade = vlridade.value
    var ida = Number(idade)
    let resposta2 = document.querySelector('section#resposta2')
    
    if(idade <= 18) {
        resposta2.innerHTML = 'Uau! Você é mais novo do que eu imaginei.'
    } else if (idade > 18) {
        resposta2.innerHTMl = 'Ah, você tem quase a mesma idade que eu.'
    }

    //let sent2 = document.getElementById('sent2').style.display = 'none'
}