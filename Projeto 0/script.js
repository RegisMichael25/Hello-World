let money = document.getElementById('money');
let result = document.getElementById('res-num');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let valor = document.getElementById('valor');
let girar = document.getElementById('girar');
let ganhouPerdeu = document.getElementById('ganhou-perdeu');

const btn1 = document.querySelector('button#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

let numeroEscolhido = null;
let moneyTemp = 0;
let moneyUsuario = 100;
let numeroAleatorio = null;

money.innerText = `R$ ${moneyUsuario}`;

valor.innerText = `${moneyTemp}`;


function acrescenta10() {
    moneyTemp = moneyTemp + 10;
    valor.innerText = `${moneyTemp}`;
    moneyUsuario = moneyUsuario - 10;
    money.innerText = `R$ ${moneyUsuario}`;
}


function adicionarDinheiro() {
    if(moneyUsuario > 0) {
        acrescenta10();
    } else {
        alert('Você não pode mais subir a aposta! Se preferir diminua sua aposta.');
    }
}

function subtrairDinheiro() {
    if(moneyTemp === 0) {
        alert('Zero ou menos não é aposta! Minimo R$ 10');
        acrescenta10();
    } else {
        moneyTemp = moneyTemp - 10;
        valor.innerText = `${moneyTemp}`;
        moneyUsuario = moneyUsuario + 10;
        money.innerText = `R$ ${moneyUsuario}`;
    }
}

function botaoEscolhido1() {
    console.log(btn1.value)
    numeroEscolhido = btn1.value;
    console.log(numeroEscolhido);
    ganhouPerdeu.innerHTML = 'Resultado...';
    ganhouPerdeu.classList.remove('ganhou');
    ganhouPerdeu.classList.remove('perdeu');
}
function botaoEscolhido2() {
    console.log(btn2.value)
    numeroEscolhido = btn2.value;
    console.log(numeroEscolhido);
    ganhouPerdeu.innerHTML = 'Resultado...';
    ganhouPerdeu.classList.remove('ganhou');
    ganhouPerdeu.classList.remove('perdeu');
}
function botaoEscolhido3() {
    console.log(btn3.value)
    numeroEscolhido = btn3.value;
    console.log(numeroEscolhido);
    ganhouPerdeu.innerHTML = 'Resultado...';
    ganhouPerdeu.classList.remove('ganhou');
    ganhouPerdeu.classList.remove('perdeu');
}
function botaoEscolhido4() {
    console.log(btn4.value)
    numeroEscolhido = btn4.value;
    console.log(numeroEscolhido);
    ganhouPerdeu.innerHTML = 'Resultado...';
    ganhouPerdeu.classList.remove('ganhou');
    ganhouPerdeu.classList.remove('perdeu');
}
function botaoEscolhido5() {
    console.log(btn5.value)
    numeroEscolhido = btn5.value;
    console.log(numeroEscolhido);
    ganhouPerdeu.innerHTML = 'Resultado...';
    ganhouPerdeu.classList.remove('ganhou');
    ganhouPerdeu.classList.remove('perdeu');
}


function inicioAposta() {
    if (moneyTemp == 0 && moneyUsuario !== 0){
        alert('Você não fez aposta, automaticamente acrescentamos R$ 10.');
        acrescenta10();
        return;
    }
    
    if(numeroEscolhido == null){
        alert('Escolha um número.')
        return;
    }
    
    if(moneyUsuario == 0){
        alert('Não é permitido apostar tudo, impossivel continuar.');
        return;
    }
    
    numeroAleatorio = Math.round(Math.random() * (5 - 1)  + 1);
    console.log(numeroAleatorio);
    console.log(moneyTemp);
    console.log(moneyUsuario);
    
    if(numeroEscolhido == numeroAleatorio){
        ganhouPerdeu.innerHTML = 'Parabéns, você ganhou.';
        moneyUsuario = moneyUsuario + moneyTemp * 2
        money.innerText = `R$ ${moneyUsuario}`;
        moneyTemp = 0;
        valor.innerHTML = `${moneyTemp}`;
        numeroEscolhido = null;
        ganhouPerdeu.classList.remove('perdeu')
        ganhouPerdeu.classList.add('ganhou')
        return;
    } else {
        ganhouPerdeu.innerHTML = 'Perdeu';
        moneyTemp = 0;
        valor.innerHTML = `${moneyTemp}`;
        numeroEscolhido = null;
        
        ganhouPerdeu.classList.remove('ganhou')
        ganhouPerdeu.classList.add('perdeu')
        return;
    }
}
