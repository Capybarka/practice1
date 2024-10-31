import { defineStore } from "pinia";    

export const usePersonStore = defineStore('PersonStore', {
     state: () => {
          return {
              persons: []
          };
      },
  
      actions: {
          loadUsersFromStorage() {
              const storedPersons = localStorage.getItem('persons');
              if (storedPersons) {
                  this.persons.push(...JSON.parse(storedPersons));
              }
          },
  
          addPerson(person) {
              this.persons.push(person);
              localStorage.setItem('persons', JSON.stringify(this.persons)); 
          },
  
          deleteUser(id) {
              const idx = this.persons.findIndex(user => user.id === id);
              if (idx !== -1) {
                  this.persons.splice(idx, 1);
                  localStorage.setItem('persons', JSON.stringify(this.persons));
              }
          }
      }
     // const persons = ref([])

     // const loadUsersFromStorage = () => {
     //      const storedPersons = localStorage.getItem('persons')
     //      if (storedPersons) {
     //           persons.value.push(...JSON.parse(storedPersons))
     //      }
     // }

     // loadUsersFromStorage()

     // const addPerson = (person) => {
     //      persons.value.push(person)
     //      localStorage.setItem('persons', JSON.stringify(persons.value)); 
     // }

     // const deleteUser = (id) => {
     //      const idx = persons.value.findIndex(user => user.id === id)
     //      if (idx !== -1) {
     //           persons.value.splice(idx, 1)
     //           localStorage.setItem('persons', JSON.stringify(persons.value));
     //      }
     // }

     // return {
     //      persons,
     //      addPerson,
     //      loadUsersFromStorage,
     //      deleteUser
     // }
     
})