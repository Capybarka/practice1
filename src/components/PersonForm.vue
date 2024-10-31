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
                    <v-btn @click="addPerson"
                         block
                         color="primary"
                         class="add-btn" 
                    >
                         Добавить
                    </v-btn>
               </v-col>
          </v-row>
          
     </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {usePersonStore} from '../stores/PersonStore'

const PersonStore = usePersonStore()

const personName = ref('')
const personId = ref(1)

const addPerson = () => {
    if (personName.value) {
          PersonStore.addUser({
               id: personId.value,
               name: personName.value
          })
          personId.value++
          personName.value = ''
    }
    else {
          PersonStore.showWarning('Введите имя!')
    }
}
</script>

<style lang="scss" scoped>
.add-btn {
     font-weight: 600;
}
</style>