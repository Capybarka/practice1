<template>
     <div>
          <v-sheet 
               class="add-person__title pa-4 mb-5 elevation-5" 
               color="background-dark rounded-xl"
          >
               <p class="text-primary font-weight-bold">Добавьте участников</p>
          </v-sheet>

          <v-sheet 
            class="persons-list pa-5 mb-10 rounded-xl elevation-5"
            color="background-dark"
          >
               <PersonForm class="mb-10"/> 
               <empty-message v-show="MyStore.users.length === 0">Пока никого нет</empty-message>
               <person-card
                    v-for="user in users"
                    class="mb-5"
                    :key="user.id"
                    :user="user"
               ></person-card>                      
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
import { useRouter } from 'vue-router'
import { useMyStore } from '../stores/MyStore'
import PersonForm from '../components/PersonForm.vue';
import PersonCard from '../components/PersonCard.vue';

const MyStore = useMyStore()

const users = MyStore.users

const router = useRouter()

const goToAddDishesPage = () => {
     if (users.length < 2) {
          MyStore.showWarning('Добавьте как-минимум 2 человека!')
     }  
     else {
          router.push('/AddDishes')
     }
}

</script>

<style lang="scss" scoped>

.persons-list {
     min-height: 60vh;
}


</style>