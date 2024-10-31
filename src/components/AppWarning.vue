<template>
    <v-alert 
          v-if="WarningStore.isShowWarning"
          class="warning w-50 position-fixed bottom-0"
          :type="warningType">
          <v-alert-title class="warning_text">{{ warningText }}</v-alert-title>
     </v-alert>
</template>

<script setup>
import { useWarningStore } from '../stores/WarningStore';
import { computed, ref } from 'vue';

const WarningStore = useWarningStore()  

const warningText= computed(() => WarningStore.warningText)
const warningType  = computed(() => WarningStore.warningType)

</script>

<style lang="scss" scoped>
.warning {
     left: 50%;
     transform: translateX(-50%);
     z-index: 1000;
}
</style>