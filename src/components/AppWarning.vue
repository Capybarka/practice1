<template>
    <v-alert 
          v-if="MyStore.isShowWarning"
          class="warning"
          :type="warningType">
          <v-alert-title class="warning_text">{{ warningText }}</v-alert-title>
     </v-alert>
</template>

<script setup>
import { useMyStore } from '../stores/MyStore';
import { computed, ref } from 'vue';

defineOptions({
     name: 'app-warning'
})

const MyStore = useMyStore()  

const warningText= computed(() => MyStore.warningText)
const warningType  = computed(() => MyStore.warningType)

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