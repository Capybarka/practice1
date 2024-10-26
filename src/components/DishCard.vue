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
           <v-btn variant="outlined" append-icon="mdi-cursor-default-click">
               Выберите плательщика
          </v-btn>

          <!-- users of dishes -->
          <div class="dish_users">
               <v-item-group multiple>
                    <v-subheader>Отметьте тех, кто ел или пил</v-subheader>
               </v-item-group>
          </div>
          
     </v-card>
</template>

<script setup>
import { reactive } from 'vue';

defineOptions({
     name: 'dish-card'
})

const users = reactive(['user1', 'user2'])
</script>

<style lang="scss" scoped>

</style>