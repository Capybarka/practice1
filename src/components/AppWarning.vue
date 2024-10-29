<template>
    <v-alert 
          v-if="MyStore.isShowWarning"
          class="warning"
          :type="type">
          <v-alert-title class="warning_text">{{ title }}</v-alert-title>
     </v-alert>
</template>

<script setup>
import { useMyStore } from '../stores/MyStore';
import { ref } from 'vue';

defineOptions({
     name: 'app-warning'
})

const props = defineProps({
     title: {
          type: String,
          required: true
     },
     type: {
          type: String,
          required: false,
          default: 'warning'
     }
})

const MyStore = useMyStore()  



</script>

<style lang="scss" scoped>
.warning {
     width: 50%;
     position: fixed;
     bottom: 20px;
     left: 50%;
     transform: translateX(-50%);
     z-index: 1000;
}
</style>