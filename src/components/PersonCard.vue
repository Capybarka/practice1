<template>
     <div class="person-card__wrapper">
          <v-card class="person-card px-5 py-3" variant="tonal">
              <v-card-title class="person-card_title">
                    <p>{{user.name}}</p>
                    <v-icon 
                         @click="MyStore.deleteUser(user.id)"
                         color="red">
                         mdi-delete
                    </v-icon>  
               </v-card-title>
          </v-card>
     </div>
</template>

<script setup>
import { useMyStore } from '../stores/MyStore';

defineOptions({
     name: 'person-card'
})

defineProps({
     user: {
          type: Object,
          required: true
     }
})

const MyStore = useMyStore()

</script>

<style lang="scss" scoped>
.person-card {
     &_title{
          display: flex;
          justify-content: space-between;
     } 
}
</style>