import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AddPerson from '../pages/AddPerson.vue'

const routes = [
     {
          path: '/',
          component: HomePage
     },
     {
      path: '/AddPerson',
      component: AddPerson
 }
]

const router = createRouter({
     history: createMemoryHistory(),
     routes
})

export default router


{/* <v-app app>
    <v-container :style="{ backgroundColor: themeColors.background }">
      <v-row>
        <v-col cols="12">
          <v-btn color="primary">rgreg</v-btn>
          <v-btn @click="toggleTheme" color="primary">toggle theme</v-btn>
            
        </v-col>
      </v-row>
     

    </v-container>
  </v-app> */}