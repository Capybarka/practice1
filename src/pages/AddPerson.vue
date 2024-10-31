<template>
     <div>
          <v-sheet 
               class="add-person__title pa-4 mb-5 elevation-5 rounded-xl" 
               color="background-dark"
          >
               <p class="text-primary font-weight-bold">Добавьте участников</p>
          </v-sheet>

          <v-sheet 
            class="persons-list pa-5 mb-10 rounded-xl elevation-5"
            color="background-dark"
          >
               <PersonForm class="mb-10"/> 
               <empty-message v-show="PersonStore.users.length === 0">Пока никого нет</empty-message>
               <person-card
                    v-for="user in PersonStore.users"
                    class="mb-5"
                    :key="user.id"
                    :user="user"
               >
               </person-card>                      
          </v-sheet>
          
          <v-row justify="center">
               <v-col cols="auto">
                    <v-btn  
                         color="primary"
                         class="elevation-5"
                         @click="goToAddDishesPage"
                    >
                         <p class="mr-2">Далее</p>
                         <v-icon>mdi-hand-pointing-right</v-icon>
                         
                    </v-btn>
               </v-col>
          </v-row>  
          
          <v-row class="warning-row">
               <v-col>
                    <app-warning></app-warning>
               </v-col>
          </v-row>
     </div>
</template>

<script setup>
import { useWarningStore } from '../stores/WarningStore'
import { usePersonStore } from '../stores/PersonStore'
import { useNavigationStore } from '../stores/NavigationStore'

import PersonForm from '../components/PersonForm.vue';
import PersonCard from '../components/PersonCard.vue';
import AppWarning from '../components/AppWarning.vue';
import EmptyMessage from '../components/EmptyMessage.vue';

const PersonStore = usePersonStore()
const WarningStore = useWarningStore()
const NavigationStore = useNavigationStore()


const goToAddDishesPage = () => {
     if (PersonStore.users.length < 2) {
          WarningStore.showWarning('Добавьте как-минимум 2 человека!')
     }  
     else {
          NavigationStore.goToAddDishesPage()
     }
}

</script>

<style lang="scss" scoped>
.persons-list {
     min-height: 60vh;
}
</style>