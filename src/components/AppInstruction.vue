<template>
    <instruction-step class="mb-10">
    <template v-slot:number>
      <span class="text-h4">1</span>
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
      <span class="text-h4">2</span>
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
      <span class="text-h4">3</span>
    </template>
    <template v-slot:title>
      Подведение итогов
    </template>
    <template v-slot:subtitle>
      Просмотрите, кто сколько и кому должен
    </template>
    </instruction-step>
</template>

<script setup>
import { useTheme } from 'vuetify';
import InstructionStep from './InstructionStep.vue';
const theme = useTheme();
</script>


