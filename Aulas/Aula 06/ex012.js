var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${agora } horas`)

if (agora < 12){
    console.log('Bom dia!!')
} else if (agora <= 18){
    console.log('Boa Tarde!!')
} else if (agora > 18) {
    console.log('Boa noite!')
} else if (agora > 24){
    console.log('Boa Madrugada!!')
}