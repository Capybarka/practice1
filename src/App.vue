<template>
  <v-app class="pa-5">
    <Navbar />
    <v-main class="position-relative">
      <v-container>
        <router-view />
      </v-container>
      <app-warning></app-warning>
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import AppWarning from "./components/AppWarning.vue";

import { usePersonStore } from "./stores/PersonStore";
import { useDishStore } from "./stores/DishStore";

import { onMounted } from "vue";

const PersonStore = usePersonStore();
const DishStore = useDishStore();

onMounted(() => {
  PersonStore.loadUsersFromStorage();
});

onMounted(() => {
  DishStore.loadDishesFromStorage();
});
</script>

