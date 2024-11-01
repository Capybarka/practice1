<template>
  <div class="d-flex ga-5">
    <v-chip 
      size="x-large"
      variant="flat" 
      color="primary"
      class="align-center justify-center text-center d-none d-sm-flex"
    >
      <slot name="number"></slot>
    </v-chip>

    <v-sheet 
      color="background-light"
      class="px-5 py-8 rounded-lg elevation-10 w-100"
    >
      <p class="text-primary font-weight-bold mb-4 text-sm-h5 text-md-h4">
        <slot name="title"></slot>
      </p>
      <p> 
        <slot name="subtitle" ></slot>
      </p>
  </v-sheet>
  </div>

</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>