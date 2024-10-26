<template>
  <v-app class="pa-5">
    <v-container>
      <v-row justify="center">
        <v-col >
          <div class="header__container">
            <h1>Делим Счёт</h1>
            <div class="header__btns">
              <v-btn variant="tonal" icon class="mr-5">
                <v-icon>mdi-account</v-icon>
              </v-btn>
              <v-btn @click="toggleTheme" variant="tonal" icon>
                <v-icon>mdi-flare</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <app-instruction></app-instruction>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="3">
          <v-btn variant="outlined" block color="primary">Начать</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
 
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDarkTheme  = ref(true)
const themeColors = reactive({});

// Функция для обновления цветов темы
const updateThemeColors = () => {
  const currentTheme = theme.global.value; // Получаем текущую тему
  if (currentTheme) {
    themeColors.value = currentTheme.colors; // Обновляем цвета
  }
};

function toggleTheme () {
  isDarkTheme.value = !isDarkTheme.value
  theme.global.name.value = isDarkTheme.value ? 'darkTheme' : 'lightTheme'
  // Обновление цветов при переключении темы
  themeColors.value = theme.global.value?.colors;
}

// Следим за изменениями в текущей теме и обновляем цвета
watch(() => theme.global.value, updateThemeColors);

</script>

<style lang="scss" scoped>

.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>