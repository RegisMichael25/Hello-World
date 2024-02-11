let money = document.getElementById('money');
let result = document.getElementById('res-num');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let valor = document.getElementById('valor');
let girar = document.getElementById('girar');
let ganhouPerdeu = document.getElementById('ganhou-perdeu');

let moneyTemp = 0;
let moneyUsuario = 100;

money.innerText = `R$ ${moneyUsuario}`;

valor.innerText = `${moneyTemp}`;

function adicionarDinheiro() {
    if(moneyUsuario > 0) {
        moneyTemp = moneyTemp + 10;
        valor.innerText = `${moneyTemp}`;
        moneyUsuario = moneyUsuario - 10;
        money.innerText = `R$ ${moneyUsuario}`;
    } else {
        alert('Você não pode mais subir a aposta! Se preferir diminua sua aposta.');
    }
}

function subtrairDinheiro() {
    if(moneyTemp === 0) {
        alert('Zero ou menos não é aposta! Minimo R$ 10');
        moneyTemp = moneyTemp + 10;
        moneyUsuario = moneyUsuario - 10;
        money.innerText = `R$ ${moneyUsuario}`;
        valor.innerText = `${moneyTemp}`;
    } else {
        moneyTemp = moneyTemp - 10;
        valor.innerText = `${moneyTemp}`;
        moneyUsuario = moneyUsuario + 10;
        money.innerText = `R$ ${moneyUsuario}`;
    }
}

