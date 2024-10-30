<template>
      <v-sheet 
        color="background-light"
        class="d-flex pa-5 rounded-xl elevation-10"
        >
      <v-chip
        color="primary"
        class="pa-8 mr-4"  
      >
        <span class="large-text">
          <slot name="number"></slot>
        </span>
      </v-chip>

     <div>
       <p class="medium-text font-weight-bold mb-3 text-primary">
         <slot name="title"></slot>
       </p>
          
       <p>
          <slot name="subtitle"></slot>
       </p>
      </div>
      
    </v-sheet>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>