import { defineStore } from "pinia";    
import { ref } from "vue";

export const usePersonStore = defineStore('PersonStore', () => {
    
     const persons = ref([])

     const loadUsersFromStorage = () => {
          const storedPersons = localStorage.getItem('persons')
          if (storedPersons) {
               persons.value.push(...JSON.parse(storedPersons))
          }
     }

     loadUsersFromStorage()

     const addPerson = (person) => {
          persons.value.push(person)
          localStorage.setItem('persons', JSON.stringify(persons.value)); 
     }

     const deleteUser = (id) => {
          const idx = persons.value.findIndex(user => user.id === id)
          if (idx !== -1) {
               persons.value.splice(idx, 1)
               localStorage.setItem('persons', JSON.stringify(persons.value));
          }
     }

     return {
          persons,
          addPerson,
          loadUsersFromStorage,
          deleteUser
     }
})