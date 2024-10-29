<template>
     <div>
          <v-text-field 
               class="add-person-input"
               label="Имя"
               variant="outlined">
               <template v-slot:prepend>
                    <v-icon>
                         mdi-account-check
                    </v-icon>
               </template>

               <template v-slot:append>
                    <v-icon color="red">
                         mdi-delete
                    </v-icon>
               </template>     
          </v-text-field>
     </div>
</template>

<script setup>
defineOptions({
     name: 'person-card'
})
</script>

<style lang="scss" scoped>
</style>