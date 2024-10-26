<template>
  <v-app class="pa-5">
    <v-container class="container">
      <nav-bar></nav-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
    
   
  </v-app>
 
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
  max-width: 1400px;
}

</style>