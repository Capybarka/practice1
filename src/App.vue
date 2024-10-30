<template>
  <v-app class="pa-5">
      <NavBar />

      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
   
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue';

</script>

