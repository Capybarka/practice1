<template>
     <div class="result__wrapper">
          <v-card
               
               class="pa-5 mb-5"
               color="background-light">
          
               <h2 class="result-title">Результаты</h2>
               <p class="result-text">Кто кому и сколько должен</p>
          </v-card>

          <v-card 
               elevation="10"
               variant="tonal"
               class="result-content pa-4 mb-5">
          </v-card>

          <v-row justify="center">
               <v-col cols="auto">
                    <v-btn 
                         variant="outlined" 
                         color="primary"
                         @click="NavigationStore.goToHomePage"
                    >
                         На главную
                    </v-btn>
               </v-col>
          </v-row>
         
     </div>
</template>

<script setup>
import {useNavigationStore} from '../stores/NavigationStore'

const NavigationStore = useNavigationStore()
</script>

<style lang="scss" scoped>
.result {
     &-title, &-text {
          text-align: center;
     }

     &-title{
          margin-bottom: 10px;
     }

     &-content{
          min-height: 60vh;
     }
}
</style>