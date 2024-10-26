<template>
     <v-card variant="tonal" class="pa-4">
          
          <v-text-field label="Название">
               <template v-slot:prepend>
                    <v-icon>
                         mdi-food-fork-drink
                    </v-icon>
               </template>
          </v-text-field>

          <v-text-field label="Цена">
               <template v-slot:prepend>
                    <v-icon>
                         mdi-currency-rub
                    </v-icon>
               </template>           
          </v-text-field>

          <!-- плательщик -->
           
          <v-card variant="tonal" class="px-10 py-5 mb-5">
               <v-row align="center">
                    <v-col cols="auto">
                         <v-btn
                              @click="dialog = true"
                              variant="outlined" 
                              append-icon="mdi-cursor-default-click">
                              Выберите плательщика
                         </v-btn>

                         <!-- будет видно только есть selectedItem !== null -->
                         <span 
                              v-show="selectedPayer" 
                              class="mx-5">
                              Платил: {{ selectedPayer }}
                         </span>
                    </v-col>
               </v-row>
          </v-card>

          <!-- кто ел и пил -->
          <!-- <v-card variant="tonal" class="px-10 py-5">
               <v-checkbox-group v-model="selectedUsers">
                    <v-checkbox
                         v-for="user in users" 
                         :key="user"
                         :label="user"
                         :value="user"
                         >
                    </v-checkbox>
               </v-checkbox-group>
          </v-card> -->
          <v-row>
               <v-col cols="12" v-for="user in users" :key="user">
                    <v-checkbox
                         :label="user"
                         :value="user"
                         v-model="selectedUsers"
                    ></v-checkbox>
               </v-col>
          </v-row>

          <p>{{ selectedUsers }}</p>

          <v-dialog
               v-model="dialog"
               width="auto">
               <v-card class="dialog-payer_content" color="background-light">
                    <v-radio-group v-model="selectedPayer" :mandatory="true">
                         <p class="dialog-payer_title">Выберите того, кто платил за блюдо</p>
                        <v-radio
                              v-for="user in users" :key="user"
                              :label="user"
                              :value="user">
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

const selectedPayer = ref(null); // кто платил

const users = reactive(['user1', 'user2', 'user3'])

// кто ел и пил
const selectedUsers = ref([]);
</script>


<style lang="scss" scoped>
@import '../styles/main.scss';

.dialog-payer {

     &_title{
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: 1px;
     }

     &_content {
          padding: 80px;
          color: black;
     }
}

</style>