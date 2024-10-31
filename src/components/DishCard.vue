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

          <v-card variant="tonal" class="px-10 py-5 mb-5">
               <v-row class="align-center">
                    <v-col cols="auto">
                         <v-btn
                              @click="dialog = true"
                              variant="outlined" 
                              color="primary">
                              <v-icon class="mr-3">mdi-cursor-default-click</v-icon>
                              Выберите плательщика
                         </v-btn>

                         <span 
                              v-show="selectedPayer" 
                              class="mx-5">
                              Платил: {{ selectedPayer }}
                         </span>
                    </v-col>
               </v-row>
          </v-card>

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
                                        v-for="user in MyStore.users"
                                        :key="user.id"
                                        :label="user.name"
                                        :value="user.name"
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
                    <v-radio-group v-model="selectedPayer">
                         <p class="dialog-payer_title">Выберите того, кто платил за блюдо</p>
                        <v-radio
                              v-for="user in MyStore.users" :key="user.name"
                              :label="user.name"
                              :value="user.name">
                        </v-radio>
                    </v-radio-group>
               </v-card>
          </v-dialog>
     </v-card>
</template>

<script setup>
import {ref, reactive } from 'vue';
import { useMyStore } from '../stores/MyStore';

const dialog = ref(false)

const selectedPayer = ref(null); // кто платил

const users = reactive(['user1', 'user2', 'user3', 'user4', 'user5'])

// кто ел и пил
const selectedUsers = ref([]);


const MyStore = useMyStore()
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