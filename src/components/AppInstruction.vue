<template>
  <v-card class="pa-4" variant="tonal">
    <h2 class="title">Рассчитайте, кто сколько должен за обед или ужин вместе с друзьями</h2>
    <v-stepper bg-color="background-light" hide-actions editable :items="['Шаг 1', 'Шаг 2', 'Шаг 3']">
      <template v-slot:item.1>
        <v-card title="Добавление персон"><p class="pa-4">Добавьте каждого, кто участвовал в обеде или ужине</p> </v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Добавление позиций"><p class="pa-4">Введите блюда или напитки из счета. Отметьте, кто их заказывал</p></v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Подведение итогов"> <p class="pa-4">Просмотрите, кто сколько и кому должен</p></v-card>
      </template>
    </v-stepper>
  </v-card>
</template>

<script setup>
defineOptions({
     name: 'app-instruction'
})
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 10px rgb(27, 27, 27);
}

.text-white {
  color: white;
}
</style>