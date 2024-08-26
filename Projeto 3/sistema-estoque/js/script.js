let usuario = document.getElementById('user');
let senha = document.getElementById('password');
// let replaced = './sistema-estoque.html'
// loginUsuario = 'usuario'
// senhaUsuario = '123456'


// function login() {
//     if(usuario.value == '' || usuario.value == '') {
//         return alert('Não foi informado usuário');
//     }

//     if(senha.value == '' || senha.value == '') {
//         return alert('Não foi informada senha');
//     }

//     if(usuario.value == loginUsuario && senha.value ==  senhaUsuario) {
//         window.location.replace(replaced);
//     }else {
//         alert('Senha incorreta.')
//     }
// }


let numProduto = 1;

let inputName = document.getElementById('nome-produto');
let inputValue = document.getElementById('valor-produto');
let quantidadeProduto = document.getElementById('quantidade-produto');
let newProdutes = document.getElementById('novos-produtos');
const listaProdutos = [];

function adicionarProduto() {
    
    const produtos = {
        
        codigo: numProduto,
        nomeProduto: inputName.value,
        quantidade: quantidadeProduto.value,
        valorProduto: inputValue.value
        
    }
    
    
    newProdutes.innerHTML += `
    <div class="produto">
    <p>00${produtos.codigo}</p>
    <p>${produtos.nomeProduto}</p>
    <p>${produtos.quantidade}und</p>
    <p>R$ ${produtos.valorProduto}</p>
    </div>
    `
    numProduto += 1
    console.log(inputName.value);
    console.log(inputValue.value);
    console.log(quantidadeProduto.value);
    console.log(produtos);
    
    listaProdutos.push(produtos);
    console.log(listaProdutos);
}

let search = document.querySelector('input#pesquisar-produto');

function pesquisaProduto() {
    let resultado = listaProdutos.find(search.value);
    console.log(resultado);
}

