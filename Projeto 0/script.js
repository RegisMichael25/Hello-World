let money = document.getElementById('money');
let result = document.getElementById('res-num');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let valor = document.getElementById('valor');
let girar = document.getElementById('girar');
let ganhouPerdeu = document.getElementById('ganhou-perdeu');

const btn1 = document.querySelector('button#btn-1');
const btn2 = document.getElementById('#btn-2');
const btn3 = document.getElementById('#btn-3');
const btn4 = document.getElementById('#btn-4');
const btn5 = document.getElementById('#btn-5');

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
}
function botaoEscolhido1() {
    console.log(btn1.value)
}
function botaoEscolhido1() {
    console.log(btn1.value)
}
function botaoEscolhido1() {
    console.log(btn1.value)
}
function botaoEscolhido1() {
    console.log(btn1.value)
}


