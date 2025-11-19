
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
    const mens2 = Object.create(lembrar)
    mens2.idade = document.querySelector('section#idadetxt')
    let mensa2 = mens2.value
    const mensagem2 = Number(mensa2)
    
    let resposta2 = document.querySelector('section#resposta2')
    
    
    if(mensagem2.idade <= 18) {
        document.querySelector('section#resposta2').style.display = 'block'
        resposta2.innerHTML = 'Nossa! você é tão novo, não esperava isso.'
    } else if(mensagem2.idade >= 18 && mensagem2.idade <= 30) {
        document.querySelector('section#resposta2').style.display = 'block'
        resposta2.innerHTML = 'Eh, você tem quase a mesma idade que eu.'
    } 
    
    let sent2 = document.getElementById('sent2').style.display = 'none'
}