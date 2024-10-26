<template>
     <div class="addPerson_input">
          <v-text-field 
               label="Имя">
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