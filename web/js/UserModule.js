import {viewModule} from './ViewModule.js';
class UserModule{
    

    
    getListModel(){
        let promiseGetListModel = fetch('getListModel',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include'
        });
        promiseGetListModel.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                                  viewModule.showListShoes(response.Model);
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (getListShoes)"+error;
                          });
    }
    
    buyShoe(){
        const id = document.getElementById('id').value;
        const buyShoe = {
            "id":id
        };
        let promiseBuyShoe = fetch('buyShoe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(buyShoe)
        });
        promiseBuyShoe.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (buyShoe)"+error;
                          });
    }

    changeProfile(){
        const authUser = JSON.parse(sessionStorage.getItem('user'));
        const newFirstname = document.getElementById('firstname').value;
        const newLastname = document.getElementById('lastname').value;
        const newPhone = document.getElementById('phone').value;
        const newPassword1 = document.getElementById('password1').value;
        const newPassword2 = document.getElementById('password2').value;
        if(newPassword1 !== newPassword2){
            document.getElementById('info').innerHTML = 'Не совпадают пароли';
            return;
        }
        const changeUser = {
            "id": authUser.id,
            "newFirstname": newFirstname,
            "newLastname": newLastname,
            "newPhone": newPhone,
            "newPassword1": newPassword1,
            "newPassword2": newPassword2
        };
        let promiseChangeProfile = fetch('changeProfile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(changeUser)
        });
        promiseChangeProfile.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  sessionStorage.setItem('user',JSON.stringify(response.user));
                                  viewModule.showProfileForm();
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (changeProfile)"+error;
                          });
    }
}
const userModule = new UserModule();
export {userModule};

