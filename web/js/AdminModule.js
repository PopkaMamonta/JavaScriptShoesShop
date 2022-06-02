import {checkMenuPanel} from './app.js';
import {viewModule} from './ViewModule.js';

class AdminModule{
    getRoles(){
        let pormiseRoles = fetch('getRoles',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include'
        });
        pormiseRoles.then(response => response.json())
                    .then(response => {
                        if(response.status){
                            adminModule.insertSelectRoles(response.roles);
                        }else{
                            document.getElementById('info').innerHTML = 'Список ролей пуст';
                        }
                    })
                    .catch(error =>{
                       document.getElementById('info').innerHTML = 'Ошибка сервера (getRoles): '+error;
                        
                    });
    }
    getUsersMap(){
        let promiseUsersMap = fetch('getUsersMap',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include'
        });
        promiseUsersMap.then(response => response.json())
                       .then(response => {
                           if(response.status){
                               adminModule.insertSelectUsers(response.usersMap);
                           }else{
                               document.getElementById('info').innerHTML = 'Список пользователей пуст';
                           }
                       })
                       .catch(error => {
                           document.getElementById('info').innerHTML = 'Ошибка сервера (getUsersMap): '+error;
                       });
       
    }
    
     sendNewShoe(){
        let promiseSentShoe = fetch('addNewShoe',{
            method: 'POST',
            body: new FormData(document.getElementById('form_add_shoe'))
        });
        promiseSentShoe.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (sendNewShoe)"+error;
                          });
    }
    
    changeModel(){
        const id=document.getElementById("id").value;
        const newName = document.getElementById('name').value;
        const newBrand = document.getElementById('brand').value;
        const newSize = document.getElementById('size').value;
        const newQuantity = document.getElementById('quantity').value;
        const newPrice = document.getElementById('price').value;
        const changeModel = {
            "id": id,
            "newName": newName,
            "newBrand": newBrand,
            "newSize": newSize,
            "newQuantity": newQuantity,
            "newPrice": newPrice
        };
        let promiseChangeModel = fetch('changeModel',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(changeModel)
        });
        promiseChangeModel.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  document.getElementById('info').innerHTML = response.info;
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (changeModel)"+error;
                          });
    }
    
    getAdminListModel(){
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
                                  viewModule.showModelForm(response.Model);
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = "Ошибка сервера (getAdminListShoes)"+error;
                          });
    }
    
    
   
    setNewRole(){
        const userId = document.getElementById('select_users').value;
        const roleId = document.getElementById('select_roles').value;
        const newUserRole = {
            "userId": userId,
            "roleId": roleId
        };
        let promiseSetUserRole = fetch('setUserRole',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            credentials: 'include',
            body: JSON.stringify(newUserRole)
        });
        promiseSetUserRole.then(response => response.json())
                          .then(response =>{
                              if(response.status){
                                  let authUser = JSON.parse(sessionStorage.getItem('user'));
                                  if(response.user.id === authUser.id){
                                      sessionStorage.setItem('role',JSON.stringify(response.role));
                                      checkMenuPanel();
                                      document.getElementById('content').innerHTML = '';
                                      return;
                                  }
                                  adminModule.getUsersMap();
                              }else{
                                  document.getElementById('info').innerHTML = response.info;
                              }
                          })
                          .catch(error => {
                              document.getElementById('info').innerHTML = 'Ошибка сервера (setNewRole): '+error;
                          });
        
    }
    insertSelectUsers(usersMap){
        const select_users = document.getElementById('select_users');
        select_users.options.length = 0;
        for(let i=0; i < usersMap.length; i++){
            const option = document.createElement('option');
            option.value = usersMap[i].user.id;
            option.text = `${usersMap[i].user.login}. Роль: ${usersMap[i].role}`;
            select_users.add(option);
        }
    };
    insertSelectRoles(roles){
        const select_roles = document.getElementById('select_roles');
        select_roles.options.length = 0;
        for(let i=0; i < roles.length; i++){
            const option = document.createElement('option');
            option.value = roles[i].id;
            option.text = roles[i].roleName;
            select_roles.add(option);
        };
    }
}
const adminModule = new AdminModule();
export {adminModule};

