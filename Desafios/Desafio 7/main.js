let per2 = document.getElementById('pergunta2').style.display = 'none'
let per3 = document.getElementById
('pergunta3').style.display = 'none'
var confirmar = true
let per4 = document.getElementById('pergunta4').style.display = 'none'
    let lembrar = {
        nome: document.getElementById('nometxt').value,
        idade: document.getElementById('idadetxt').value,
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
    
    setTimeout(() => {
        if(age <= 18) {
        resposta2.innerHTML = "Nossa! você e mais novo do que eu esperava."
    } else if(age > 18 && age <= 30) {
      resposta2.innerHTML = "Ah, você tem quase a mesma idade que eu."  
    }
    }, 1500)

    setTimeout(() => {
        let sent2 = document.getElementById('sent2').style.display = 'none'
        document.querySelector('section#pergunta3').style.display = 'block'
    }, 2500)
}

// Confirmar a pergunta

function Confirma() {
    let sim = document.getElementById('sim').style.display = 'block'
    let nao = document.getElementById('nao').style.display = 'none'
    var confirm = true
    let resposta3 = document.querySelector('section#resposta3')
    const medo = document.getElementById('medo')
    let per4 = document.getElementById('pergunta4').style.display = 'block'

    setTimeout(() => {
        resposta3.innerHTML = 'Qual seu maior medo?'
    }, 1800)
    
    medo.addEventListener("click", () => {
        let resposta4 = document.querySelector('section#resposta4')
        let fear = document.getElementById('medotxt').value
        resposta4.innerHTML = `Hmm, medo de ${fear}, que bom que eu posso conhecer isso ${lembrar.nome}`
    })
}


// Recusar a pergunta

function Recusa() {
    let sim = document.getElementById('sim').style.display = 'none'
    let nao = document.getElementById('nao').style.display = 'block'
    let resposta3 = document.querySelector('section#resposta3')
    var confirm = false

    setTimeout(() => {
        resposta3.innerHTML = 'Puts, então deixa pra lá.'
    }, 1100)
}

// Definir medo

