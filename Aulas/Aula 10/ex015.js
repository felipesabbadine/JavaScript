var num = [1, 2, 5, 9, 11]
num.sort()

console.log(`${num}`)

num[5] = 13
console.log(`${num}`)

num.push(9)
console.log(`${num}`)

num.sort()
console.log(`O valor de ${num[4]}`)

let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)

