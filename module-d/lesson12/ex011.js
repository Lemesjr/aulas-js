var year = 65;

console.log(`Você tem ${year} anos.`);

if (year < 16) {
    console.log(`Idade insuficiente para votar...`)
} else if (year < 18 || year >65) {
    console.log(`Voto facultativo!`)
} else {
    console.log(`Voto obrigatório!`)
}