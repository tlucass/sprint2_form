const form = document.getElementById('myForm');

const names = document.getElementById('name');
const labelNames = document.querySelector("label[for='name']");

const email = document.getElementById('email');
const labelEmail = document.querySelector("label[for='email']");

const password = document.querySelector("input[name='password']");
const labelPassword = document.querySelector("label[for='password']");

const phone = document.getElementById('phone');
const labelPhone = document.querySelector("label[for='phone']");

const age = document.getElementById('age');
const labelAge = document.querySelector("label[for='age']");

const gender = document.getElementById('gender');

names.addEventListener("keyup", ()=>{

    if(names.value.length < 3){
      names.setAttribute("style", "outline-color:#B00000");
      labelNames.setAttribute("style", "color:#B00000");
    }else{
      names.setAttribute("style", "outline-color:#dddddd");
      labelNames.setAttribute("style", "color:#049200");
    }
  
});
  
  
email.addEventListener("keyup", ()=>{
  
    if(email.value.length < 5 || !email.value.includes("@")){
      email.setAttribute("style", "outline-color:#B00000");
      labelEmail.setAttribute("style", "color:#B00000");
    }else{
      email.setAttribute("style", "outline-color:#dddddd");
      labelEmail.setAttribute("style", "color:#049200");
    }
  
});


password.addEventListener("keyup", ()=>{
  
    if(password.value.length < 5){
      password.setAttribute("style", "outline-color:#B00000");
      labelPassword.setAttribute("style", "color:#B00000");
    }else{
      password.setAttribute("style", "outline-color:#dddddd");
      labelPassword.setAttribute("style", "color:#049200");
    }
    
});
  
phone.addEventListener("keyup", ()=>{
  
const inputPhone = phone.value.trim();
const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/; // Expressão regular para validar o formato (00)00000-0000

if (inputPhone.length < 13 || !phoneRegex.test(inputPhone)) {
    phone.setAttribute("style", "outline-color:#B00000");
    labelPhone.setAttribute("style", "color:#B00000");
} else {
    phone.setAttribute("style", "outline-color:#dddddd");
    labelPhone.setAttribute("style", "color:#049200");
}

});

age.addEventListener("keyup", ()=>{

    const isNumber = /^\d+$/.test(age.value);
  
    if(age.value < 18|| !isNumber){
      age.setAttribute("style", "outline-color:#B00000");
      labelAge.setAttribute("style", "color:#B00000");
    }else{
      age.setAttribute("style", "outline-color:#dddddd");
      labelAge.setAttribute("style", "color:#049200");
    }
  
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Validação do nome
    const inputName = names.value.trim();
    if (inputName.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    // Validação do email
    const inputEmail = email.value.trim();
    if (inputEmail.length < 5 || !inputEmail.includes("@")) {
        alert('Informe um email válido.');
        return;
    }

    // Validação da senha
    const inputPassword = password.value.trim();
    if (inputPassword.length < 5) {
        alert('A senha deve ter pelo menos 5 caracteres.');
        return;
    }

    const inputPhone = phone.value.trim();
    if(inputPhone.length != 14 ){
        alert('O número de celular deve conter o seguinte padrão: ()***-**.');
        return;
    }

    // Validação da idade
    if (age.value < 18) {
        alert('Você deve ter pelo menos 18 anos.');
        return;
    }

    const isNumber = /^\d+$/.test(age.value);
    if(!isNumber){
        alert('O campo idade aceita apenas números.');
        return;
    }

    // Validação do gênero
    if (gender === '') {
        alert('Selecione um gênero');
        return;
    }

    // Se todas as validações passaram, mostrar uma mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    form.submit();
});