<template>
    <div class="addDishes__wrapper" >
          <v-card 
               class="addDishes__title pa-4 my-5" 
               color="background-light">
               
               <v-card-title>Добавьте блюда</v-card-title>
               <v-spacer></v-spacer>
               <v-btn variant="tonal" icon>
                    <v-icon>mdi-plus-box</v-icon>
               </v-btn>
               <!-- при нажатии на кнопку добавления добавится инпут -->
          </v-card>

          <v-card
               variant="tonal"
               class="dishes-list pa-5 mb-5">

               <empty-message>Пока ничего нет</empty-message>

               <!-- <dish-card class="mb-5"></dish-card> -->
          </v-card>
          

          <v-row justify="center">
               <v-col cols="auto">
                    <v-btn variant="outlined" color="primary">Назад</v-btn>
               </v-col>

               <v-col cols="auto">
                    <v-btn @click="goToResultPage" variant="outlined" color="primary">Далее</v-btn>
               </v-col>
          </v-row> 
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToResultPage = () => router.push('/AddPerson/AddDishes/Result')
</script>

<style lang="scss" scoped>
.addDishes {
     &__title{ 
          display: flex;
     }
}

.dishes-list{
     min-height: 60vh;
}
</style>