<template>
     <div class="result__wrapper">
          <v-card
               class="pa-5 mb-5"
               color="background-light">
          
               <h2 class="result-title">Результаты</h2>
               <p class="result-text">Кто кому и сколько должен</p>
          </v-card>

          <v-card 
               variant="tonal"
               class="result-content pa-4">

          </v-card>
     </div>
</template>

<script setup>

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