<template>
    <v-row justify="center">
        <v-col >
          <div class="header__container">
            <h1 class="title">Делим Счёт</h1>
            <div class="header__btns">
              <v-btn variant="tonal" class="mr-5" icon>
                <v-icon>mdi-home</v-icon>
              </v-btn>

              <v-btn variant="tonal" class="mr-5" icon>
                <v-icon>mdi-account</v-icon>
              </v-btn>
        
              <v-btn @click="toggleTheme" variant="tonal" icon>
                <v-icon>mdi-flare</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
</template>

<script setup>
defineOptions({
     name: 'nav-bar'
})
import { useTheme } from 'vuetify'
import { onMounted, reactive, ref, watch } from 'vue'

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

<style lang="scss">
@import '../styles/variables.scss';

.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: $text-primary;
}
</style>

