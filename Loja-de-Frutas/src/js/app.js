let frutas = [
    {
        name: 'Banana',
        value: 5.50,
        urlImg: 'https://cdn.pixabay.com/photo/2014/04/03/11/07/bananas-311788_960_720.png',
    },
    {
        name: 'Maçã',
        value: 3.20,
        urlImg: 'https://cdn.pixabay.com/photo/2020/03/25/12/33/apple-4967157_960_720.png',
    },
    {
        name: 'Tangerina',
        value: 2.30,
        urlImg: 'https://cdn.pixabay.com/photo/2014/04/03/10/09/orange-309985_960_720.png',
    },
    {
        name: 'Melância',
        value: 10.90,
        urlImg: 'https://cdn.pixabay.com/photo/2013/07/12/19/18/watermelon-154510_960_720.png',
    },
    {
        name: 'Abacaxi',
        value: 5.00,
        urlImg: 'https://cdn.pixabay.com/photo/2014/12/22/00/00/pineapples-576576_1280.png',
    },
    {
        name: 'Laranja',
        value: 3.50,
        urlImg: 'https://cdn.pixabay.com/photo/2014/12/21/23/59/orange-576537_1280.png',
    },
    {
        name: 'Maracujá',
        value: 4.70,
        urlImg: 'https://cdn.pixabay.com/photo/2012/04/26/19/38/passion-42901_960_720.png',
    },
    {
        name: 'Kiwi',
        value: 3.80,
        urlImg: 'https://cdn.pixabay.com/photo/2014/09/08/18/14/kiwi-439396_960_720.png',
    },
    {
        name: 'Uva',
        value: 5.80,
        urlImg: 'https://cdn.pixabay.com/photo/2016/04/01/12/19/bunch-of-grapes-1300662_960_720.png',
    },
    {
        name: 'Cereja',
        value: 3.30,
        urlImg: 'https://cdn.pixabay.com/photo/2016/04/01/08/29/brace-1298738_1280.png',
    },
    {
        name: 'Morângo',
        value: 8.90,
        urlImg: 'https://cdn.pixabay.com/photo/2012/04/18/12/54/strawberry-36949_1280.png',
    },
    {
        name: 'Pêra',
        value: 6.40,
        urlImg: 'https://cdn.pixabay.com/photo/2021/09/14/18/28/pear-6624738_1280.png',
    },
    {
        name: 'Limão',
        value: 10.90,
        urlImg: 'https://cdn.pixabay.com/photo/2016/03/31/21/16/citrus-1296291_1280.png',
    },
]

let container = document.getElementsByClassName('container')[0];
let carrinho = 0;


for(let pos in frutas){
    let card = document.createElement('div');
    let image = document.createElement('img');
    let value = document.createElement('p'); 
    let button = document.createElement('button');

    card.classList.add('card');
    button.classList.add('add-cart');

    let txtName = document.createTextNode(`${frutas[pos].name}`);
    let txtButton = document.createTextNode(`Add to cart`);
    let txtValue = document.createTextNode(`R$ ${frutas[pos].value}`);

    value.appendChild(txtValue);
    button.appendChild(txtButton);
    container.appendChild(card);

    image.src = `${frutas[pos].urlImg}`;
    
    card.appendChild(txtName);
    card.appendChild(image);
    card.appendChild(value);
    card.appendChild(button);

    let valueCart = document.getElementById('icone-carrinho');
    
    button.addEventListener('click', () => {
        valueCart.innerText = `  ${carrinho = carrinho + 1}`;
    })
}


    let botaoPesquisa = document.getElementById('botao-pesquisa');
    let valorPesquisa = document.querySelector('#valor-pesquisa');

    botaoPesquisa.addEventListener('click', () => {
        
        let valueSearch = valorPesquisa.value;
        let frutaPesquisada = frutas.find(fruta => fruta.name === valueSearch);
    
        if(frutaPesquisada){
            container.innerHTML = "";

            let card = document.createElement('div');
            let image = document.createElement('img');
            let value = document.createElement('p'); 
            let button = document.createElement('button');

            card.classList.add('card');
            button.classList.add('add-cart');

            let txtName = document.createTextNode(`${frutas[frutas.indexOf(frutaPesquisada)].name}`);
            let txtButton = document.createTextNode(`Add to cart`);
            let txtValue = document.createTextNode(`R$ ${frutas[frutas.indexOf(frutaPesquisada)].value}`);

            value.appendChild(txtValue);
            button.appendChild(txtButton);
            container.appendChild(card);

            image.src = `${frutas[frutas.indexOf(frutaPesquisada)].urlImg}`;
            
            card.appendChild(txtName);
            card.appendChild(image);
            card.appendChild(value);
            card.appendChild(button);

            valorPesquisa.value = '';
        } else {
            console.log('Fruta Não Encontrada');
            container.innerHTML = '';
            container.innerHTML += 'FRUTA NÃO ENCONTRADA.'
        }
    });


let botaoCarrinho = document.getElementById('botao-carrinho-de-compras');
let abaDeItensNoCarrinho = document.getElementById('aba-de-itens-no-carrinho');

console.log(abaDeItensNoCarrinho)

botaoCarrinho.addEventListener('click', () => {
    abaDeItensNoCarrinho.style.color = 'white'
});