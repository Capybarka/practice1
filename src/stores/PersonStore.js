import { defineStore } from "pinia";    
import { ref, reactive } from "vue";

export const usePersonStore = defineStore('PersonStore', () => {

     const users = ref([])

     const loadUsersFromStorage = () => {
          const storedUsers = localStorage.getItem('users')
          if (storedUsers) {
               users.value.push(...JSON.parse(storedUsers))
          }
     }

     loadUsersFromStorage()

     const addPerson = (user) => {
          users.value.push(user)
          localStorage.setItem('users', JSON.stringify(users.value)); 
     }

     const deleteUser = (id) => {
          const idx = users.value.findIndex(user => user.id === id)
          if (idx !== -1) {
               users.value.splice(idx, 1)
               localStorage.setItem('users', JSON.stringify(users.value));
          }
     }

     return {
          users,
          addPerson,
          loadUsersFromStorage,
          deleteUser
     }
})