<template>
      <v-container>
        <v-row>
          <v-col 
            cols="12"
            class="pa-0 mb-10"
          >
          <v-sheet 
            color="background-dark"
            class="pa-5 mb-10 rounded-xl elevation-10"
          >
            <h1 
              class="mb-5 text-primary text-center text-md-h2 text-sm-h3 font-weight-bold" 
            >
              Чекдели
            </h1>
            <h2 class="medium-text text-center">Рассчитайте, кто сколько должен за обед или ужин вместе с друзьями</h2>
          </v-sheet>

            <AppInstruction />
          </v-col>
        </v-row>
        
        <div class="d-flex justify-center">
          <v-btn 
            color="primary"
            @click="goToAddPesonPage"
          >
            <p class="mr-2">Начать</p>
            <v-icon>mdi-hand-pointing-right</v-icon>
          </v-btn>
        </div>
      
    </v-container>
</template>

<script setup>
import AppInstruction from '../components/AppInstruction.vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const goToAddPesonPage = () => router.push('/AddPerson')

</script>

