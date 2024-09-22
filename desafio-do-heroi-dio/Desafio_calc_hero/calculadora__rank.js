 let wins = prompt("Quantas vitórias o heroi teve: ");
 let loses = prompt("Quantas derrotas o heroi teve: ");

 function returnCalc(win, lose) {
    let CalcRank = win - lose;

    return CalcRank;
 };

let resultCalcRank = returnCalc(wins, loses);

function infoRank(res) {

    if(res <= 10) {
        return 'Ferro'
    }else if((res >= 11) && (res <= 20)){
        return 'Bronze'
    }else if((res >= 21) && (res <= 50)){
        return 'Prata'
    }else if((res >= 51) && (res <= 80)){
        return 'Ouro'
    }else if((res >= 81) && (res <= 90)){
        return 'Diamante'
    }else if((res >= 91) && (res <= 100)){
        return 'Lendário'
    }else if(res >= 101){  //Não necessário, porém optei em fazer. 
        return 'Imortal'   
    }
}

let theRankIs = infoRank(resultCalcRank);

console.log(`O rank do heroi é, ${theRankIs}`);