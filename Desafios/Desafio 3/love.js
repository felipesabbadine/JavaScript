var lv = 1
var hp = 20

while (lv < 20 || hp < 92) {
    hp = hp + 4
    lv++
    console.log(`Seu LV aumentou para ${lv}!`)
    console.log(`Seu HP aumentou para ${hp}!`)
}

console.log('Você se sente mais forte!')