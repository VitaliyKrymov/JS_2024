// console.log(document.forms);
// console.log(document.forms.form1);
let form1=document.forms['form1'];
console.log(form1);
let inputUsername=form1.username;
console.log(inputUsername);
inputUsername.value='this is kokos';

console.log(inputUsername);
let h1=document.getElementById('h1');

inputUsername.oninput=function () {
    h1.innerText=this.value;
    console.log(this.value);
}



let passwordInput = form1['password'];
console.log(passwordInput);

passwordInput.value='xxxxx';
passwordInput.onfocus=function (){
    passwordInput.type='text'
    console.log(this.value);
}

passwordInput.onblur=function (){
    passwordInput.type='password'
}
//---------------------------------------------/
//
// passwordInput.onfocus=function (){
//     console.log(this.value);
// }

passwordInput.addEventListener('focus',function (){
    console.log(this.value);
});

console.log('****************************************');
let form2 = document.forms['form2'];
let username2 = form2['username'];
let password2 = form2['password'];

password2.onmouseover=function (){
    this.type = 'text';
}

password2.onmouseleave = function () {
    this.type = 'password';
};

form2.onsubmit=function (){

}

