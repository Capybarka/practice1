<template>
      <v-container>
      

      <v-row>
        <v-col cols="12">
          <app-instruction></app-instruction>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="3">
          <v-btn @click="goToAddPesonPage" block color="primary">Начать</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import AppInstruction from '../components/AppInstruction.vue';
defineOptions({
     name: 'home-page'
})

import { onMounted, reactive, ref, watch } from 'vue'

import { useRouter } from 'vue-router';

const router = useRouter()



const goToAddPesonPage = () => router.push('/AddPerson')

</script>

<style lang="scss" scoped>

</style>