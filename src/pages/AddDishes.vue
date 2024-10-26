<template>
    <div class="addDishes__wrapper pa-4" >
          <v-card class="addDishes__title pa-4 my-5" variant="tonal">
               <v-card-title>Добавьте блюда</v-card-title>
               <v-spacer></v-spacer>
               <v-btn variant="tonal" icon>
                    <v-icon>mdi-plus-box</v-icon>
               </v-btn>
               <!-- при нажатии на кнопку добавления добавится инпут -->
          </v-card>
          <dish-card class="mb-5"></dish-card>
          <v-row justify="center">
                    <v-col cols="auto">
                         <v-btn @click="goToAddDishesPage" variant="outlined" color="primary">Далее</v-btn>
                    </v-col>
          </v-row>   
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.addDishes {
     &__title{
          display: flex;
     }
}
</style>