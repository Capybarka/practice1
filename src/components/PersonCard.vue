<template>
     <div class="person-card__wrapper">
          <v-card class="person-card px-5 py-3" variant="tonal">
              <v-card-title class="person-card_title">
                    <p>name</p>
                    <v-icon color="red">
                         mdi-delete
                    </v-icon>  
               </v-card-title>
          </v-card>
     </div>
</template>

<script setup>
defineOptions({
     name: 'person-card'
})
</script>

<style lang="scss" scoped>
.person-card {
     &_title{
          display: flex;
          justify-content: space-between;
     } 
}
</style>