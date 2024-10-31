<template>
     <div>
          <v-text-field 
               class="add-person-input"
               label="Имя"
               variant="outlined"
               v-model="personName"
          >
               <template v-slot:prepend>
                    <v-icon>
                         mdi-account-check
                    </v-icon>
               </template>
          </v-text-field>

          <v-row justify="center">
               <v-col cols="11">
                    <v-btn 
                         block
                         color="primary"
                         class="font-weight-bold" 
                         @click="addPerson"
                    >
                         Добавить
                    </v-btn>
               </v-col>
          </v-row>
          
     </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import { useWarningStore } from '../stores/WarningStore';

import {defineEmits} from 'vue'

const WarningStore = useWarningStore()

const personName = ref('')

const emit = defineEmits(['add-person-emit'])

const addPerson = () => {
     if (personName.value) {
          emit('add-person-emit', {
               id: Date.now(),
               name: personName.value
          })
          personName.value = ''
     }
     else {
          WarningStore.showWarning('Введите имя!')
     }
}
</script>
