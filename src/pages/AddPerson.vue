<template>
          <div class="addPerson__wrapper pa-4">
               <v-card class="addPerson__title pa-4 my-5" variant="tonal">
                    <v-card-title>Добавьте участников</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn variant="tonal" icon>
                         <v-icon>mdi-account-multiple-plus</v-icon>
                    </v-btn>
                    <!-- при нажатии на кнопку добавления добавится инпут с кнопка добавить -->
               </v-card>

              <person-card></person-card>

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
.addPerson {
     &__title {
          display: flex;
     }
}
</style>