<template>
  <v-alert
    v-if="WarningStore.isShowWarning"
    class="warning position-fixed bottom-1 justify-center w-50"
    :type="warningType"
  >
    <p class="text-center text-sm-h6">{{ warningText }}</p>
  </v-alert>
</template>

<script setup>
import { useWarningStore } from "../stores/WarningStore";
import { computed } from "vue";

const WarningStore = useWarningStore();

const warningText = computed(() => WarningStore.warningText);
const warningType = computed(() => WarningStore.warningType);
</script>

<style lang="scss" scoped>
.warning {
  left: 25%;
  z-index: 1000;
}
</style>