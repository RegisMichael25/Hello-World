let escPedraBot = document.getElementById('pedra-bot');
let escPapelBot = document.getElementById('papel-bot');
let escTesouraBot = document.getElementById('tesoura-bot');

let escPedraCliente = document.getElementById('pedra');
let escPapelCliente = document.getElementById('papel');
let escTesouraCliente = document.getElementById('tesoura');

let result = document.getElementById('resultado');

console.log(result);


function pedraPapelTesoura() {
    escPedraBot.classList.remove('color');
    escPapelBot.classList.remove('color');
    escTesouraBot.classList.remove('color');

    let numAleatorio = Math.round(Math.random() * (3 - 1) + 1);
    console.log(numAleatorio);


    if(numAleatorio == 1) {
        console.log('Pedra');
        escPedraBot.classList.add('color');
        mostrarEscolhaBot = 'Pedra';
    }
    else if(numAleatorio == 2) {
        console.log('Papel');
        escPapelBot.classList.add('color')
        mostrarEscolhaBot = 'Papel';
    }
    else if(numAleatorio == 3) {
        escTesouraBot.classList.add('color')
        console.log('Tesoura');
        mostrarEscolhaBot = 'Tesoura';
    }

    return mostrarEscolhaBot;
}

escPedraCliente.addEventListener('click', () => {
    console.log('Sua escolha foi Pedra');
    mostrarEscolhaCliente = 'Pedra';
    result.innerHTML += `<p>Escolha da Maquina foi: ${pedraPapelTesoura()}</p>`;
    result.innerHTML += `<p>Sua escolha: ${mostrarEscolhaCliente}</p>`;
});

escPapelCliente.addEventListener('click', () => {
    console.log('Sua escolha foi Papel');
    mostrarEscolhaCliente = 'Papel';
    result.innerHTML += `<p>Escolha da Maquina foi: ${pedraPapelTesoura()}</p>`;
    result.innerHTML += `<p>Sua escolha: ${mostrarEscolhaCliente}</p>`;
});

escTesouraCliente.addEventListener('click', () => {
    console.log('Sua escolha foi Tesoura');
    mostrarEscolhaCliente = 'Tesoura';
    result.innerHTML += `<p>Escolha da Maquina foi: ${pedraPapelTesoura()}</p>`;
    result.innerHTML += `<p>Sua escolha: ${mostrarEscolhaCliente}</p>`;
});

export default pedraPapelTesoura;