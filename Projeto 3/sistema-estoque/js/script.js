let modal = document.querySelector('.modal');
let btnAdd = document.querySelector('.add');
let btnExit = document.querySelector('.icon_exit')

btnAdd.addEventListener('click', () => {
    modal.style.display = 'block'
});

btnExit.addEventListener('click', () => {
    modal.style.display = 'none'
});

