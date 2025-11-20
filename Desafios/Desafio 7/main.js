let per2 = document.getElementById('pergunta2').style.display = 'none'
let per3 = document.getElementById('pergunta3').style.display = 'none'
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
    let sent1 = document.getElementById('sent1').style.display = 'none' 

    setTimeout(() => {
        document.querySelector('section#pergunta2').style.display = 'block'
       
    }, 1000)
    
    
}

// Segunda mensagem

function enviar() {
    let idade = document.getElementById('idadetxt')
    let ida = idade.value
    let age = Number(ida)
    let resposta2 = document.querySelector('section#resposta2')
    
    if(age <= 18) {
        resposta2.innerHTML = "Nossa! você e mais novo do que eu esperava."
    } else if(age > 18 && age <= 30) {
      resposta2.innerHTML = "Ah, você tem quase a mesma idade que eu."  
    } 
    let sent2 = document.getElementById('sent2').style.display = 'none'
    document.querySelector('section#pergunta3').style.display = 'block'

}

// Confirmar a pergunta

function Confirma() {
    let sim = document.getElementById('sim').style.display = 'none'
    let nao = document.getElementById('nao').style.display = 'none'
    let resposta3 = document.querySelector('section#resposta3')

    resposta3.innerHTML = 'Qual seu maior medo?'
}


// Recusar a pergunta

function Recusa() {
    let sim = document.getElementById('sim').style.display = 'none'
    let nao = document.getElementById('nao').style.display = 'none'
    let resposta3 = document.querySelector('section#resposta3')

    resposta3.innerHTML = 'Puts, então deixa pra lá.'
}