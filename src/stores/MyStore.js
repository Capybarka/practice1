import { defineStore } from "pinia";    
import { ref, reactive } from "vue";

export const useMyStore = defineStore('MyStore', () => {

     const users = reactive([])

     // загрузка из localStorage 
     const loadUsersFromStorage = () => {
          const storedUsers = localStorage.getItem('users')
          if (storedUsers) {
               users.push(...JSON.parse(storedUsers))
          }
     }

     loadUsersFromStorage()

     // добавление юзера
     const addUser = (user) => {
          users.push(user)
          localStorage.setItem('users', JSON.stringify(users)); 
     }



     // управление warning
     const isShowWarning = ref(false)

     const showWarning = () => {
          isShowWarning.value = true;
     
          setTimeout(() => {
               isShowWarning.value = false;
          }, 3000)
     }
     // управление warning конец


     

     return {
          users,
          isShowWarning,
          showWarning,
          addUser,
          loadUsersFromStorage
     }
})