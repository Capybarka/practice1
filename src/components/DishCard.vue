<template>
     <v-card variant="tonal" class="pa-4">
          
          <v-text-field label="Название">
               <template v-slot:prepend>
                    <v-icon>
                         mdi-food-fork-drink
                    </v-icon>
               </template>

               <!-- <template v-slot:append>
                    <v-icon color="red">
                         mdi-delete
                    </v-icon>
               </template>      -->
          </v-text-field>

          <v-text-field label="Цена">
               <template v-slot:prepend>
                    <v-icon>
                         mdi-cash-100
                    </v-icon>
               </template>

               <!-- <template v-slot:append>
                    <v-icon color="red">
                         mdi-delete
                    </v-icon>
               </template>      -->
          </v-text-field>

          <!-- плательщик -->
           <v-btn
               @click="dialog = true"
               variant="outlined" 
               append-icon="mdi-cursor-default-click">
               Выберите плательщика
          </v-btn>

          <v-dialog
               v-model="dialog"
               width="auto">
               <v-card class="dialog-payer_content" color="background-light">
                    <v-radio-group>
                         <p class="dialog-payer-title">Выберите того, кто платил</p>
                         <v-radio
                              v-for="user in users"
                              :key="user"
                              value="user">
                              
                         </v-radio>
                    </v-radio-group>
               </v-card>
          </v-dialog>
     </v-card>
</template>

<script setup>
import {ref, reactive } from 'vue';

defineOptions({
     name: 'dish-card'
})

const dialog = ref(false)
// тут будет массив юзеров
const users = reactive(['user1', 'user2', 'user3'])
</script>


<style lang="scss" scoped>
// @import './styles/main.scss';

.dialog-payer {

     &_content {
          padding: 80px;
          color: black;
     }

     &-title{
          color: $text-primary;
     }
}

</style>