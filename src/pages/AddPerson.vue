<template>
     <div class="add-person__wrapper">
          <v-sheet 
               class="add-person__title pa-4 mb-5" 
               color="background-light">
               <v-card-title>Добавьте участников</v-card-title>
          </v-sheet>

          <v-card 
               class="persons-list pa-5 mb-5"
               variant="tonal" 
               elevation="10">
               <person-form class="mb-10"></person-form>
                <empty-message v-show="MyStore.users.length === 0">Пока никого нет</empty-message>
       
               <person-card
                    v-for="user in users"
                    class="mb-5"
                    :key="user.id"
                    :user="user"
               ></person-card>                      
          </v-card>
          
          <v-row justify="center">
               <v-col cols="auto">
                    <v-btn 
                         variant="outlined" 
                         color="primary"
                         @click="goToAddDishesPage">
                         Далее
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