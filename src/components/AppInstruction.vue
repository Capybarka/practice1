<template>
  <v-sheet 
    color="background-dark"
    class="pa-5 mb-10 rounded-xl"
  >
    <h1 
      class="align-center mb-5 large-text" 
      :style="{ color: theme.global.current.value.colors.primary }"
      >
      Чекдели
    </h1>
    <h2 class="medium-text align-center">Рассчитайте, кто сколько должен за обед или ужин вместе с друзьями</h2>
  </v-sheet>

  <v-sheet
    color="background-dark"
    class="px-5 py-10 rounded-xl"
  >
   <instruction-step class="mb-10">
    <template v-slot:number>
      1
    </template>
    <template v-slot:title>
      Добавление персон
    </template>
    <template v-slot:subtitle>
      Добавьте каждого, кто участвовал в обеде или ужине
    </template>
   </instruction-step>

   <instruction-step class="mb-10">
    <template v-slot:number>
      2
    </template>
    <template v-slot:title>
      Добавление позиций
    </template>
    <template v-slot:subtitle>
      Введите блюда или напитки из счета. Отметьте, кто их заказывал
    </template>
   </instruction-step>

   <instruction-step>
    <template v-slot:number>
      3
    </template>
    <template v-slot:title>
      Подведение итогов
    </template>
    <template v-slot:subtitle>
      Просмотрите, кто сколько и кому должен
    </template>
   </instruction-step>
  </v-sheet
  >
  
   
  
  
</template>

<script setup>
import { useTheme } from 'vuetify';
import InstructionStep from './InstructionStep.vue';
const theme = useTheme();
</script>


