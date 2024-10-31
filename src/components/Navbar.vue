<template>
  <v-container>
    <v-row justify="center">
        <v-col >
          <div class="d-flex justify-center align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon 
                class="mr-1"
                color="primary"
              > 
                mdi-credit-card-check-outline
              </v-icon>
              <h2 
                class="title cursor-pointer"
                @click="NavigationStore.goToHomePage"  
              >
                Чекдели
              </h2>
            </div>

            <div>
              <v-btn 
                variant="tonal" 
                icon
                @click="toggleTheme" 
              >
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { onMounted, reactive, ref, watch } from 'vue'
import {useNavigationStore} from '../stores/NavigationStore'

const theme = useTheme()

const NavigationStore = useNavigationStore()

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

