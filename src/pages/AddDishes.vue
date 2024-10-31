<template>
    <div >
          <v-sheet 
               class="d-flex pa-4 my-5 align-center rounded-xl elevation-5" 
               color="background-dark">
               <p class="text-primary font-weight-bold px-4">Добавьте блюда</p>
               <v-spacer />
               <v-btn 
                    variant="tonal" 
                    icon
               >
                    <v-icon 
                         color="primary"
                         @click="initDish"
                    >
                         mdi-plus-box
                    </v-icon>
               </v-btn>
          </v-sheet>

          <v-sheet
               color="background-dark"
               class="min-height-50per pa-5 mb-5 rounded-xl elevation-5"
               elevation="10">
               
               <empty-message>Пока ничего нет</empty-message>

               <dish-card 
                    class="mb-5"
               >
               </dish-card>

               <dish-card 
                    v-for="dish in DishStore.dishes"
                    class="mb-5"
               >
               </dish-card>
          </v-sheet>

          <v-row justify="center">
               <v-col cols="12">
                    <v-sheet
                         color="background-dark"
                         class="pa-4 rounded-xl elevation-5">
                         <div class="d-flex flex-lg-column align-center">
                              <p class="mb-5">Промежуточный итог:</p>
                              <p class="total_info">
                                   {{ 0 }}
                                   <v-icon>mdi-currency-rub</v-icon>
                              </p>
                         </div>
                    </v-sheet>
               </v-col>
          </v-row>

          <v-row justify="center">
               <v-col cols="auto">
                    <v-btn 
                         variant="outlined" 
                         color="primary"
                         @click="NavigationStore.goToAddPersonPage" 
                    >
                         Назад
                    </v-btn>
               </v-col>

               <v-col cols="auto">
                    <v-btn 
                         variant="outlined" 
                         color="primary"
                         @click="NavigationStore.goToResultPage" 
                    >
                         Далее
                    </v-btn>
               </v-col>
          </v-row> 
    </div>
</template>

<script setup>
import {useNavigationStore} from '../stores/NavigationStore'
import {useDishStore} from '../stores/DishStore'

import EmptyMessage from '../components/EmptyMessage.vue'
import DishCard from '../components/DishCard.vue'

const NavigationStore = useNavigationStore()
const DishStore = useDishStore()

const initDish = () => {
     DishStore.initDish()
}
</script>
