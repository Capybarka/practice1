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
          <v-expansion-panels bg-color="background-light" variant="accordion">
               <v-expansion-panel
                    title="Отметьте тех, кто вкусил">
                    <v-expansion-panel-text>
                         
                              <div class="payer__wrapper">
                                   <v-checkbox
                                        :label="'Все'"
                                        :value="all"
                                        v-model="selectedUsers"
                                        dense
                                   ></v-checkbox>
                                   
                                   <v-checkbox
                                        v-for="user in users"
                                        :key="user"
                                        :label="user"
                                        :value="user"
                                        v-model="selectedUsers"
                                        dense
                                   ></v-checkbox>
                              </div>
               
                    </v-expansion-panel-text>
               </v-expansion-panel>
          </v-expansion-panels>

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

const users = reactive(['user1', 'user2', 'user3', 'user4', 'user5'])

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

.payer__wrapper{
     display: flex;
     flex-wrap: wrap;
     gap: 20px;
}

</style>