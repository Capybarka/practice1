<template>
     <div >
          <v-card  
               class="person-card px-5 py-3 rounded-xl elevation-5" 
               variant="tonal">
              <v-card-title class="person-card_title d-flex justify-space-between">
                    <p>{{user.name}}</p>
                    <v-icon 
                         color="red"
                         @click="MyStore.deleteUser(user.id)"
                    >
                         mdi-delete
                    </v-icon>  
               </v-card-title>
          </v-card>
     </div>
</template>

<script setup>
import { useMyStore } from '../stores/MyStore';

defineProps({
     user: {
          type: Object,
          required: true
     }
})

const MyStore = useMyStore()

</script>
