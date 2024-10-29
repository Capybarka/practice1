<template>
    <div class="persons-list-empty-message">
          <p><slot>Пока пусто</slot></p>          
          <v-icon>mdi-emoticon-sad</v-icon>                   
     </div>
</template>

<script setup>
defineOptions({
     name: 'empty-message'
})
</script>

<style lang="scss" scoped>

.persons-list-empty-message {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     margin: 30px;
     text-align: center;
     text-transform: uppercase;
     font-size: 20px;

     p:first-child {
          margin-right: 10px;
     }

}
</style>