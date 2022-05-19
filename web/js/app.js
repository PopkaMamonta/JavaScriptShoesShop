
import {loginModule} from './LoginModule.js';
import {viewModule} from './ViewModule.js';
import {adminModule} from './AdminModule.js';
import {userModule} from './UserModule.js';

export{checkMenuPanel};

const menu_list_shoes = document.getElementById("menu_list_shoes");
menu_list_shoes.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleActiveMenu(e.target.id);
});
const menu_add_shoe = document.getElementById("menu_add_shoe");
menu_add_shoe.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleActiveMenu(e.target.id);
});

const menu_profile = document.getElementById("menu_profile");
menu_profile.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleActiveMenu(e.target.id);
});
const menu_admin_panel = document.getElementById("menu_admin_panel");
menu_admin_panel.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleActiveMenu(e.target.id);
    viewModule.showAdminPanelForm(adminModule.getUsersMap(), adminModule.getRoles());
});
const menu_about = document.getElementById("menu_about");
menu_about.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleActiveMenu(e.target.id);
});
const menu_login = document.getElementById("menu_login");
menu_login.addEventListener("click", (e) => {
    e.preventDefault();
    viewModule.showLoginForm();
});
const menu_logout = document.getElementById("menu_logout");
menu_logout.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleMenuLogin(e.target.id);
    loginModule.sendLogout();
});


function checkMenuPanel(){
    let role = sessionStorage.getItem('role');
    if(role===null){
        if(!document.getElementById('menu_add_shoe').classList.contains('hidden')){
            document.getElementById('menu_add_shoe').classList.add('hidden');
        }
        if(!document.getElementById('menu_profile').classList.contains('hidden')){
            document.getElementById('menu_profile').classList.add('hidden');
        }
        if(!document.getElementById('menu_admin_panel').classList.contains('hidden')){
            document.getElementById('menu_admin_panel').classList.add('hidden');
        }
        if(!document.getElementById('menu_logout').classList.contains('hidden')){
            document.getElementById("menu_logout").classList.add('hidden'); //Спрятать выход
        }
        if(!document.getElementById('menu_login').classList.contains('hidden')){
            document.getElementById("menu_login").classList.remove('hidden');//Показать вход
       
        return;
    }
    role = JSON.parse(role);
    if(role.roleName === 'USER'){
        if(document.getElementById('menu_add_shoe').classList.contains('hidden')){
            document.getElementById('menu_add_shoe').classList.remove('hidden');//Показать 
        }
        if(document.getElementById('menu_profile').classList.contains('hidden')){
            document.getElementById('menu_profile').classList.remove('hidden');//Показать 
        }
        if(!document.getElementById('menu_admin_panel').classList.contains('hidden')){
            document.getElementById('menu_admin_panel').classList.add('hidden');//Спрятать
        }
        if(document.getElementById('menu_logout').classList.contains('hidden')){
            document.getElementById("menu_logout").classList.remove('hidden'); //Показать выход
        }
        if(!document.getElementById('menu_login').classList.contains('hidden')){
            document.getElementById("menu_login").classList.add('hidden');//Спрятать вход
        }
        return;
    }
    if(role.roleName === 'ADMINISTRATOR'){
        if(document.getElementById('menu_add_shoe').classList.contains('hidden')){
            document.getElementById('menu_add_shoe').classList.remove('hidden');//Показать 
        }
        if(document.getElementById('menu_profile').classList.contains('hidden')){
            document.getElementById('menu_profile').classList.remove('hidden');//Показать 
        }
        if(document.getElementById('menu_admin_panel').classList.contains('hidden')){
            document.getElementById('menu_admin_panel').classList.remove('hidden');//Показать
        }
        if(document.getElementById('menu_logout').classList.contains('hidden')){
            document.getElementById("menu_logout").classList.remove('hidden'); //Показать выход
        }
        if(!document.getElementById('menu_login').classList.contains('hidden')){
            document.getElementById("menu_login").classList.add('hidden');//Спрятать вход
        }
        return;
    }
    }
}
checkMenuPanel();