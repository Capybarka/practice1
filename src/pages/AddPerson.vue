<template>
          <div class="addPerson__wrapper pa-4">
               <v-card class="addPerson__title pa-4 my-5" variant="tonal">
                    <v-card-title>Добавьте участников</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn variant="tonal" icon>
                         <v-icon>mdi-account-multiple-plus</v-icon>
                    </v-btn>
                    <!-- при нажатии на кнопку добавления откроется инпут с кнопка добавить -->
               </v-card>

               <div class="addPerson_form">
                    <v-text-field  label="Имя">
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
                    <!-- <v-btn></v-btn> -->
               </div>
                    
          </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.addPerson {
     &__title{
          display: flex;
     }
}
</style>