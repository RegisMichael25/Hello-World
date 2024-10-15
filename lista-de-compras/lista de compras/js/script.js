let modal = document.querySelector('.modal');
let btnOpenModal = document.querySelector('#open_modal');
let btnExitModal = document.querySelector('.icon_exit');
let addToList = document.querySelector('.add_to_list');

let productNameTxt = document.querySelector('#nome_produto');
let amountTxt = document.querySelector('#quantidade');
let valueProductTxt = document.querySelector('#valor_produto');

let updModal = document.querySelector('.back-modal');
let btnUpdate = document.querySelector('#icon-update');

let containerList = document.querySelector('.container_list');

let listPurchase = [];

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnExitModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

function addNewPurchaseToList(productName, amount, valueProduct)
{
    if(findExistings(productName))
    {
        console.log('Compra Existente na lista.');
        window.alert('Essa compra ja foi adicionada');
    }
    else if(productName == '' || productName == ' ')
    {
        window.alert("Você não digitou o nome da compra, o nome da compra é essencial para esta lista.");
    }
    else
    {
        let newPurchese = {
            productName: productName,
            amount: amount,
            valueProduct: valueProduct
        };
        listPurchase.push(newPurchese);
    }
}   

function resetInput()
{
    productNameTxt.value = '';
    amountTxt.value = '';
    valueProductTxt.value = '';
}

function findExistings(productName)
{
    let res = listPurchase.some(purchase => purchase.productName === productName);
    console.log(res);
    return res;
};

function deletePurchase(productName){
    listPurchase = listPurchase.filter(purchase => purchase.productName !== productName);
    renderList();
}

function renderList(){
    containerList.innerHTML = '';

    listPurchase.forEach(purchase => {
        containerList.innerHTML += 
        `<div class="container_data">
            <span class="product_name">${purchase.productName} </span>
            <span class = "amount">${purchase.amount} und</span> 
            <span class = "value_product"> R$ ${purchase.valueProduct}</span>
            <span>
                <button id="icon-update" onclick="updatePurchase('${purchase.productName}')"><i class="bi bi-pencil-square"></i></button> 
                <button id="icon-delete" onclick="deletePurchase('${purchase.productName}')"><i class="bi bi-trash"></i></button>
            </span>       
        </div>`
    });
}

addToList.addEventListener('click', () => {
    addNewPurchaseToList(productNameTxt.value, amountTxt.value, valueProductTxt.value);
    
    renderList();
    resetInput();
    console.log(listPurchase);
});
