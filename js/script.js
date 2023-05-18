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