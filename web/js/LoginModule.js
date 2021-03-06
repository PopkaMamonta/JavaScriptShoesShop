import {checkMenuPanel} from './app.js';
import {viewModule} from './ViewModule.js';
import {userModule} from './UserModule.js';

class LoginModule{

 sendCredential(){
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const credential = {
        "login": login,
        "password": password
    };
    let promise = fetch('login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset:utf8'
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    });
    promise.then(response=> response.json())
       .then(response =>{
           if(response.auth){
               sessionStorage.setItem('token',JSON.stringify(response.token));
               sessionStorage.setItem('user',JSON.stringify(response.user));
               sessionStorage.setItem('role',JSON.stringify(response.role));
               sessionStorage.setItem('model',JSON.stringify(response.model));
               checkMenuPanel();
               viewModule.showProfileForm();
               document.getElementById('info').innerHTML = response.info;
                const listNavlinks = document.getElementsByClassName("button");
                listNavlinks[2].classList.add("hover");
                listNavlinks[4].classList.remove("hover");
           }else{
               checkMenuPanel();
               document.getElementById('info').innerHTML = response.info;
           }
       })
       .catch( error =>{
           document.getElementById('info').innerHTML = "Ошибка запроса (sendCredential): "+error;
           document.getElementById('content').innerHTML = "";
       });
 }
 sendLogout(){
     let promise = fetch('logout', {
         method: 'GET'
     });
     promise.then(response => response.json())
             .then(response => {
                 if(!response.auth){
                     if(sessionStorage.getItem('token')!== null){
                        sessionStorage.removeItem('token');
                     }
                     if(sessionStorage.getItem('user')!== null){
                        sessionStorage.removeItem('user');
                     }
                     if(sessionStorage.getItem('role')!== null){
                        sessionStorage.removeItem('role');
                     }
                    checkMenuPanel();
                    viewModule.showLoginForm();
                    document.getElementById('info').innerHTML = response.info;
                    const listNavlinks = document.getElementsByClassName("button");
                    listNavlinks[3].classList.add("hover");
                 }
     });
     
 }
 registrationNewUser(){
     const firstname = document.getElementById('firstname').value;
     const lastname = document.getElementById('lastname').value;
     const phone = document.getElementById('phone').value;
     const login = document.getElementById('login').value;
     const password1 = document.getElementById('password1').value;
     const password2 = document.getElementById('password2').value;
     if(password1 !== password2){
         document.getElementById('info').innerHTML = 'Пароли не совпадают';
         document.getElementById('password1').innerHTML = "";
         document.getElementById('password2').innerHTML = "";
         return;
     }
     const user = {
         "firstname": firstname,
         "lastname": lastname,
         "phone": phone,
         "login": login,
         "password": password1
     };
     let promise = fetch('registration',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset:utf8'
        },
        credentials: 'include',
        body: JSON.stringify(user)
    });
    promise.then(respnose => respnose.json())
            .then(response =>{
                if(response.status){
                    viewModule.showLoginForm();
                    document.getElementById('info').innerHTML = response.info;
                }else{
                    viewModule.showRegistrationForm();
                    document.getElementById('info').innerHTML = response.info;
                }
            })
            .catch(error =>{
                document.getElementById('info').innerHTML = "Ошибка запроса (registrationNewUser): "+error;
                document.getElementById('content').innerHTML = "";
            });
 }
}
const loginModule = new LoginModule();
export {loginModule};