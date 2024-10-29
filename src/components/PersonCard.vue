<template>
     <div class="person-card-wrapper">
          <v-text-field 
               class="add-person-input"
               label="Имя"
               variant="outlined"
               v-model="personName"
               @input="addPersonEmit">

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
import {ref, reactive} from 'vue'

defineOptions({
     name: 'person-card'
})

const personName = ref('')

const addPersonEmit = () => {
     if (personName) {

     }
}
</script>

<style lang="scss" scoped>

</style>