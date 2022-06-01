import {loginModule} from './LoginModule.js';
import {adminModule} from './AdminModule.js';
import {userModule} from './UserModule.js';
class ViewModule{
    showLoginForm(){
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = `<div id="card">
                                <div id="card-content">
                                  <div id="card-title">
                                    <h2>Вход</h2>
                                  </div>
                                  <form method="post" class="form">
                                    <label for="login" style="padding-top:13px">Логин</label>
                                    <input id="login" class="form-content" type="login" name="login" autocomplete="on" required />
                                    <div class="form-border"></div>
                                    <label for="password" style="padding-top:22px">Пароль
                                      </label>
                                    <input id="password" class="form-content" type="password" name="password" required />
                                    <div class="form-border"></div>
                                    <input id="btnLogin" type="submit" name="submit" value="Войти" />
                                    <a href="#" id="registration">Нет еще аккаунта?</a>
                                  </form>
                                </div>
                              </div>`;
        document.getElementById('password').addEventListener('keypress',(e)=>{
            if(e.key === 'Enter'){
                e.preventDefault();
                loginModule.sendCredential();
            }
        });
        const btnLogin = document.getElementById('btnLogin');
        btnLogin.addEventListener('click', (e)=>{
            e.preventDefault();
            loginModule.sendCredential();
        });
        const registration = document.getElementById('registration');
        registration.addEventListener('click', (e)=>{
            e.preventDefault();
            viewModule.showRegistrationForm();
        });
    }
    showRegistrationForm(){
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML =`<div id="card">
                                <div id="card-content">
                                  <div id="card-title">
                                    <h2>Регистрация</h2>
                                  </div>
                                  <form method="post" class="form">
                                    <label for="firstname" style="padding-top:13px">Имя</label>
                                    <input id="firstname" class="form-content" name="firstname" autocomplete="on" required />
                                    <div class="form-border"></div>
                                    <label for="lastname" style="padding-top:13px">Фамилия</label>
                                    <input id="lastname" class="form-content" name="lastname" autocomplete="on" required />
                                    <div class="form-border"></div>
                                    <label for="phone" style="padding-top:13px">Номер телефона</label>
                                    <input id="phone" class="form-content" name="phone" autocomplete="on" required />
                                    <div class="form-border"></div>
                                    <label for="login" style="padding-top:13px">Логин</label>
                                    <input id="login" class="form-content" name="login" autocomplete="on" required />
                                    <div class="form-border"></div>
                                    <label for="password1" style="padding-top:22px">Пароль</label>
                                    <input id="password1" class="form-content" type="password" name="password1" required />
                                    <div class="form-border"></div>
                                    <label for="password2" style="padding-top:22px">Повторите пароль</label>
                                    <input id="password2" class="form-content" type="password" name="password2" required />
                                    <div class="form-border"></div>
                                    <input id="btnRegistration" type="submit" name="submit" value="Зарегистрироваться" />
                                    <a href="#" id="login_again">Вход</a>
                                  </form>
                                </div>
                              </div>`;
        const btnRegistration = document.getElementById('btnRegistration');
        btnRegistration.addEventListener('click', (e)=>{
            e.preventDefault();
            loginModule.registrationNewUser();
        });
        const login = document.getElementById('login_again');
        login.addEventListener('click', (e)=>{
            e.preventDefault();
            viewModule.showLoginForm()();
        });
    }
    showAdminPanelForm(){
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div id="card">
                <div id="card-content">
                  <div id="card-title">
                    <h2>Изменение роли</h2>
                  </div>
                  <form method="post" class="form">
                    <label for="select_users" style="padding-top:22px">Пользователи</label>
                    <select class="form-select" id="select_users" name="selectUsers" style="margin:13px 0 13px 0">
                      
                    </select>
                    <label for="select_roles" style="padding-top:22px">Роли</label>
                    <select class="form-select" id="select_roles" name="selectRoles" style="margin:13px 0 13px 0">
                    <input id="btnSetRole" type="submit" name="submit" value="Назначить роль" />
                  </form>
                </div>
              </div>`;
        
        document.getElementById('btnSetRole').addEventListener('click',(e)=>{
            e.preventDefault();
            adminModule.setNewRole();
        });
    }
    showAddShoesForm(){
        document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML = 
            `<div id="card">
                    <div id="card-content">
                      <div id="card-title">
                        <h2>Добавление обуви</h2>
                      </div>
                      <form method="post" class="form" id="form_add_shoe">
                        <label for="name" style="padding-top:13px">Название модели</label>
                        <input id="name" class="form-content" name="name" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="brand" style="padding-top:13px">Брэнд</label>
                        <input id="brand" class="form-content" name="brand" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="size" style="padding-top:13px">Размер</label>
                        <input id="size" class="form-content" name="size" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="price" style="padding-top:13px">Цена</label>
                        <input id="price" class="form-content" name="price" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="quantity" style="padding-top:13px">Количество</label>
                        <input id="quantity" class="form-content" name="quantity" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="imageFile" style="padding-top:13px">Изображение</label>
                        <input type="file" name="imageFile" value="imageFile" id="imageFile" style="padding:13px" required/> 
                        <input id="btn_add_shoes" type="submit" name="submit" value="Добавить обувь" />
                      </form>
                    </div>
                  </div>`;
                document.getElementById('form_add_shoe').addEventListener('submit',e=>{
                    e.preventDefault();
                    userModule.sendNewShoe();
                });
    }
    showListShoes(Model){
        document.getElementById("info").innerHTML = '';
        let content = document.getElementById('content');
        content.innerHTML = "";
        let list = document.createElement('div');
        list.classList.add('d-flex');
        list.classList.add('justify-content-center');
        content.appendChild(list);
        for(let i = 0; i < Model.length; i++){
            list.innerHTML +=  
            `<div id="card">
                <div id="card-content">
                  <div id="card-title">
                    <h2>${Model[i].name}</h2>
                  </div>
                  <form method="post" class="form">
                        <div class="grid-item">
                                <img src="insertFile/${Model[i].pathToImage}" class="card-img-top" style="max-height: 24rem;" alt="...">
                            <div class="text-body">
                                <label for="login" style="padding-top:13px">Брэнд: </label>
                                <input id="login" class="form-content" name="login" autocomplete="on" readonly value="${Model[i].brand}" />
                                <div class="form-border"></div>
                                <label for="login" style="padding-top:13px">Размер: </label>
                                <input id="login" class="form-content" name="login" autocomplete="on" readonly value="${Model[i].size}" />
                                <div class="form-border"></div>
                                <label for="login" style="padding-top:13px">Количество: </label>
                                <input id="login" class="form-content" name="login" autocomplete="on" readonly value="${Model[i].quantity}" />
                                <div class="form-border"></div>
                                <label for="login" style="padding-top:13px">Цена: </label>
                                <input id="login" class="form-content" name="login" autocomplete="on" readonly value="$ ${Model[i].price}" />
                                <div class="form-border"></div>
                            </div>
                        </div>
                  </form>
            </div>`;
        }
    }
    showProfileForm(){
        document.getElementById("info").innerHTML = '';
        let authUser = JSON.parse(sessionStorage.getItem('user'));
        const content = document.getElementById('content');
        content.innerHTML =`<div id="card">
                                <div id="card-content">
                                  <div id="card-title">
                                    <h2>Профиль</h2>
                                  </div>
                                  <form method="post" class="form">
                                    <label for="firstname" style="padding-top:13px">Имя</label>
                                    <input id="firstname" class="form-content" name="firstname" autocomplete="on" value="${authUser.firstname}" />
                                    <div class="form-border"></div>
                                    <label for="lastname" style="padding-top:13px">Фамилия</label>
                                    <input id="lastname" class="form-content" name="lastname" autocomplete="on" value="${authUser.lastname}" />
                                    <div class="form-border"></div>
                                    <label for="phone" style="padding-top:13px">Номер телефона</label>
                                    <input id="phone" class="form-content" name="phone" autocomplete="on" value="${authUser.phone}" />
                                    <div class="form-border"></div>
                                    <label for="login" style="padding-top:13px">Логин</label>
                                    <input id="login" class="form-content" name="login" autocomplete="on" readonly value="${authUser.login}" />
                                    <div class="form-border"></div>
                                    <label for="password1" style="padding-top:22px">Новый пароль</label>
                                    <input id="password1" class="form-content" type="password" name="password1"/>
                                    <div class="form-border"></div>
                                    <label for="password2" style="padding-top:22px">Повторите пароль</label>
                                    <input id="password2" class="form-content" type="password" name="password2"/>
                                    <div class="form-border"></div>
                                    <input id="btn_change_profile" type="submit" name="submit" value="Изменить профиль" />
                                  </form>
                                </div>
                              </div>`;
        const btnRegistration = document.getElementById('btn_change_profile');
        btnRegistration.addEventListener('click', (e)=>{
            e.preventDefault();
            userModule.changeProfile();
        });
    }
    showAboutAs(){
                document.getElementById("info").innerHTML = '';
        const content = document.getElementById('content');
        content.innerHTML =`<div class="card border-primary my-5 mx-auto" style="max-width: 30rem;">
                                <h3 class="card-header text-center">Наша программа сохранения паролей для Вас!!!</h3>
                                <div class="card-body">
                                        Сохраняйте скриншоты страниц и вы быстро найдете сайт по виду<br><br>
                                        ВАЖНО!!!<br>Пароли для сайтов шифруются при запоминании и прочесть их можете только Вы!<br><br>
                                        Вы также можете изменить данные своего профиля, все кроме логина. Если пароли оставить пустыми, они не поменяются.
                                </div>
                            </div>`;
    }
}
const viewModule = new ViewModule();
export {viewModule};


