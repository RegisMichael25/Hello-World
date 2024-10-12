let modal = document.querySelector('.modal');
let btnAdd = document.querySelector('#add');
let btnExit = document.querySelector('.icon_exit');
let addToList = document.querySelector('.add_to_list');

let productNameTxt = document.querySelector('#nome_produto');
let amountTxt = document.querySelector('#quantidade');
let valueProductTxt = document.querySelector('#valor_produto');

let containerList = document.querySelector('.container_list');


let productName = productNameTxt.value;
let amount = parseFloat(amountTxt.value);
let valueProduct = parseFloat(valueProductTxt.value);




function addNewPurchaseToList(productName, amount, valueProduct)
{
    const createNewPurchase = document.createElement('div');
        createNewPurchase.innerHTML = `<span>${productName}, ${amount} - ${valueProduct}</span>`;
        containerList.appendChild(createNewPurchase);
}

btnAdd.addEventListener('click', () => {
    modal.style.display = 'block'
});

btnExit.addEventListener('click', () => {
    modal.style.display = 'none'
});

addToList.addEventListener('click', () => {
    addNewPurchaseToList(productName, amount, valueProduct);
    console.log(productName)
    console.log(amount)
    console.log(valueProduct)
});

