let emailString = document.getElementById('email');
let passwordString = document.getElementById('password');
let butForm = document.querySelector('button.button-login');
let nameString = document.querySelector('name');

emailString.addEventListener("input", function() {
    let valor = this.value;
    valor = valor.toLowerCase()
    if(valor !== 'regis'){
        emailString.style.borderBottom = '1px solid red'
    }else{
        emailString.style.borderBottom = '1px solid black'
    }
})

passwordString.addEventListener('input', function(){
    let valor = this.value
    if(valor !== '1234'){
        passwordString.style.borderBottom = '1px solid red'
    }else{
        passwordString.style.borderBottom = '1px solid black'
    }
})