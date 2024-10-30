<template>
      <v-card 
      class="d-flex pa-5 rounded-xl"
      variant="tonal">
      <v-chip
        color="primary"
        class="pa-8 mr-4"  
      >
        <span class="large-text">
          <slot name="number"></slot>
        </span>
      </v-chip>

     <div>
       <p 
         class="medium-text font-weight-bold mb-3" 
         :style="{ color: theme.global.current.value.colors.primary }"
       >
         <slot name="title"></slot>
       </p>
          
       <p>
          <slot name="subtitle"></slot>
       </p>
      </div>
      
    </v-card>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
</script>

<style lang="scss" scoped>

</style>