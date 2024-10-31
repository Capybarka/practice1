<template>
      <v-container>
        <v-row>
          <v-col 
            cols="12"
            class="pa-0 mb-10"
          >
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

