<template>
  <v-app class="pa-5">
      <Navbar />

      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
   
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue' 

</script>

