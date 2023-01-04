var timeNow = new Date()
var time = timeNow.getHours();

console.log(`Agora são exatamente ${time} horas.`);

if (time < 6) {
    console.log(`Boa madrugada!`)
} else if (time < 12) {
    console.log(`Bom dia!`)
}else if (time <= 18) {
        console.log('Boa tarde!')
}else if (time <= 24) {
    console.log('Boa noite!!!!')
}