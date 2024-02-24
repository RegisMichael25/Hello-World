let usuario = document.getElementById('user');
let senha = document.getElementById('password');
let replaced = './sistema-estoque.html'
loginUsuario = 'Regis'
senhaUsuario = '1234'

function login() {
    if(usuario.value == '' || usuario.value == '') {
        return alert('Não foi informado usuário');
    }

    if(senha.value == '' || senha.value == '') {
        return alert('Não foi informada senha');
    }

    if(usuario.value == loginUsuario && senha.value ==  senhaUsuario) {
        window.location.replace(replaced);
    }else {
        alert('Senha incorreta.')
    }
}


let numProduto = 1;

function adicionarProduto() {
    let inputName = document.getElementById('nome-produto');
    let inputValue = document.getElementById('valor-produto');
    let newProdutes = document.getElementById('novos-produtos');


    const produtos = {
        codigo: numProduto,
        nomeProduto: inputName.value,
        valorProduto: inputValue.value
    }

newProdutes.innerHTML += `
    <table>
        <tr>
            <th>${produtos.codigo}</th>
            <th>${produtos.nomeProduto}</th>
            <th>R$ ${produtos.valorProduto}</th>
        </tr>
    </table>
`
    numProduto += 1
    console.log(inputName.value)
    console.log(inputValue.value)
    console.log(produtos)
}