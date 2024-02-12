let money = document.getElementById('money');
let result = document.getElementById('res-num');
let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let valor = document.getElementById('valor');
let girar = document.getElementById('girar');
let ganhouPerdeu = document.getElementById('ganhou-perdeu');
let escolhaUsuario = document.getElementById('escolha-usuario');


let moneyTemp = 0;
let moneyUsuario = 100;
let numeroAleatorio = null;

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

function inicioAposta() {
    result.innerHTML = '';
    if(escolhaUsuario.value == '' || escolhaUsuario.value == 0) {
        alert('Não foi possivel iniciar, escolha um número.');
        result.innerHTML = '';
    } else if(moneyTemp == 0) {
        alert('Não apostou nada, incluimos automaticamente R$ 10')
        moneyTemp = moneyTemp + 10;
        valor.innerText = `${moneyTemp}`;
        moneyUsuario = moneyUsuario - 10;
        money.innerText = `R$ ${moneyUsuario}`;
    } else {
        numeroAleatorio = Math.round(Math.random() * (10 - 1) + 1);
        console.log(numeroAleatorio);
        if(numeroAleatorio == escolhaUsuario.value) {
            ganhouPerdeu.innerText = 'Parabéns, você acabou de ganhar!'
            moneyUsuario = moneyUsuario + (moneyTemp * 2);
            money.innerHTML = `R$ ${moneyUsuario}`;
        } else {
            ganhouPerdeu.innerText = 'Que pena, você perdeu.'
            moneyUsuario = moneyUsuario - moneyTemp;
            money.innerHTML = `R$ ${moneyUsuario}`
        }
        result.innerHTML += `<p>O número sortiado foi ${numeroAleatorio}.</p>`
        result.innerHTML += `<p>Você escolheu ${escolhaUsuario.value}.</p>`
    }
    escolhaUsuario.value = '';
}
