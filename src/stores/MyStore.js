import { defineStore } from "pinia";    
import { ref, reactive } from "vue";

export const useMyStore = defineStore('MyStore', () => {

     const users = reactive([])

     const loadUsersFromStorage = () => {
          const storedUsers = localStorage.getItem('users')
          if (storedUsers) {
               users.push(...JSON.parse(storedUsers))
          }
     }

     loadUsersFromStorage()

     const addUser = (user) => {
          users.push(user)
          localStorage.setItem('users', JSON.stringify(users)); 
     }

     const deleteUser = (id) => {
          const idx = users.findIndex(user => user.id === id)
          if (idx !== -1) {
               users.splice(idx, 1)
               localStorage.setItem('users', JSON.stringify(users));
          }
     }

     // const isShowWarning = ref(false)
     // const warningText = ref('')
     // const warningType = ref('')

     // const showWarning = (text, type = 'warning') => {
     //      warningText.value = text
     //      warningType.value = type

     //      isShowWarning.value = true;
          
     //      setTimeout(() => {
     //           isShowWarning.value = false;
     //      }, 3000)
     // }
    
     return {
          users,
          addUser,
          loadUsersFromStorage,
          deleteUser
     }
})