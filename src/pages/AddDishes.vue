<template>
    <div >
          <v-card 
               class="d-flex pa-4 my-5" 
               color="background-light">
               <v-card-title>Добавьте блюда</v-card-title>
               <v-spacer />
               <v-btn 
                    variant="tonal" 
                    icon
               >
                    <v-icon>mdi-plus-box</v-icon>
               </v-btn>
          </v-card>

          <v-card
               variant="tonal"
               class="min-height-50per pa-5 mb-5"
               elevation="10">
               
               <empty-message>Пока ничего нет</empty-message>

               <dish-card class="mb-5"></dish-card>
          </v-card>

          <v-row justify="center">
               <v-col cols="12">
                    <v-card
                         variant="tonal"
                         class="elevation-10 pa-4">
                         <div class="d-flex flex-lg-column align-center">
                              <p class="mb-5">Промежуточный итог:</p>
                              <p class="total_info">
                                   {{ 0 }}
                                   <v-icon>mdi-currency-rub</v-icon>
                              </p>
                         </div>
                    </v-card>
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

const NavigationStore = useNavigationStore()

</script>

<style lang="scss" scoped>
</style>