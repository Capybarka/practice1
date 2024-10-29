<template>
          <div class="add-person__wrapper">
               <v-card 
                    class="add-person__title pa-4 mb-5" 
                    color="background-light">
                    <v-card-title>Добавьте участников</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn variant="tonal" icon>
                         <v-icon>mdi-account-multiple-plus</v-icon>
                    </v-btn>
                    <!-- при нажатии на кнопку добавления добавится инпут с кнопка добавить -->
               </v-card>

               <v-card variant="tonal" class="persons-list pa-5 mb-5">
                    <empty-message>Пока никого нет</empty-message>
                    
                    <!-- <person-card></person-card> -->
               </v-card>
              

               <v-row justify="center">
                    <v-col cols="auto">
                         <v-btn @click="goToAddDishesPage" variant="outlined" color="primary">Далее</v-btn>
                    </v-col>
               </v-row>   
          </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToAddDishesPage = () => router.push('/AddPerson/AddDishes')
</script>

<style lang="scss" scoped>
.add-person {
     &__title {
          display: flex;
     }
}

.persons-list {
     min-height: 60vh;
}

</style>