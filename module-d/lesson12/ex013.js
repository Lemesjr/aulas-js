var now = new Date();
var dayWeek = now.getDay();

/*
    O JS trás os dias da semana em números, representados a seguir:
    [0] = Domingo
    [1] = Segunda
    [2] = Terça
    [3] = Quarta
    [4] = Quinta
    [5] = Sexta
*/

switch (dayWeek) {
    case 0:
        dayWeek = 'Domingo'
        break
    case 1:
        dayWeek = 'Segunda-Feira'
        break
    case 2:
        dayWeek = 'Terça-Feira'
        break
    case 3:
        dayWeek = 'Quarta-Feira'
        break
    case 4:
        dayWeek = 'Quinta-Feira'
        break
    case 5:
        dayWeek = 'Sexta-Feira'
        break
    case 6:
        dayWeek = 'Sexta-Feira'
        break
    default:
        console.log('[ERRO]: o dia da semana é inválido.')
        break
}

console.log(`Hoje é ${dayWeek}.`)