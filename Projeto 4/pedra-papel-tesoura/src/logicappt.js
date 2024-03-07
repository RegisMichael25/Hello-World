import Ppt from "./Ppt";

let escPedraBot = document.getElementById('pedra-bot');
let escPapelBot = document.getElementById('papel-bot');
let escTesouraBot = document.getElementById('tesoura-bot');
let escPedra = document.getElementById('pedra');
let escPapel = document.getElementById('papel');
let escTesoura = document.getElementById('tesoura');
let result = document.getElementById('resultado');



function pedraPapelTesoura() {
    escPedraBot.classList.remove('color');
    escPapelBot.classList.remove('color');
    escTesouraBot.classList.remove('color');
    let numAleatorio = Math.round(Math.random() * (3 - 1) + 1);
    console.log(numAleatorio);


    if(numAleatorio == 1) {
        console.log('Pedra');
        escPedraBot.classList.add('color');
        mostrarEscolha = 'pedra';
    }
    else if(numAleatorio == 2) {
        console.log('Papel');
        escPapelBot.classList.add('color')
    }
    else if(numAleatorio == 3) {
        escTesouraBot.classList.add('color')
        console.log('Tesoura');
    }

    
}

export default pedraPapelTesoura