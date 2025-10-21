let numeros = [2, 5, 7, 2 ,3 , 8]
console.log(numeros)
/*
for(pos=0 ;pos < numeros.length; pos++) {
    console.log(`O valor da ${pos} tem o número ${numeros[pos]}`)
} */

    for(let pos in numeros) {
        console.log(`O valor para ${pos} e o número ${numeros[pos]}`)
    }
