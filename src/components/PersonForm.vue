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
          </v-text-field>

          <v-row justify="center">
               <v-col cols="11">
                    <v-btn block variant="tonal">Добавить</v-btn>
               </v-col>
          </v-row>
          
     </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

defineOptions({
     name: 'person-form'
})

const personName = ref('')

const addPersonEmit = () => {
     if (personName) {

     }
}
</script>

<style lang="scss" scoped>
</style>