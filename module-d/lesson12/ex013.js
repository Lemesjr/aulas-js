var now = new Date();
var dayWeek = now.getDay();
var checkDayWeek = null

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
        checkDayWeek = 'Domingo'
        break
    case 1:
        checkDayWeek = 'Segunda-Feira'
        break
    case 2:
        checkDayWeek = 'Terça-Feira'
        break
    case 3:
        checkDayWeek = 'Quarta-Feira'
        break
    case 4:
        checkDayWeek = 'Quinta-Feira'
        break
    case 5:
        checkDayWeek = 'Sexta-Feira'
        break
    case 6:
        checkDayWeek = 'Sábado'
        break
    default:
        // Error Handling
        console.log('[ERRO]: o dia da semana é inválido.')
        break
}

if (dayWeek < 7) {
    console.log(`Hoje é ${checkDayWeek}.`)
}




