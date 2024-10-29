import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AddPerson from '../pages/AddPerson.vue'
import AddDishes from '../pages/AddDishes.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
      {
        path: '/',
        component: HomePage
      },
      {
        path: '/AddPerson',
        component: AddPerson
      },
      {
        path: '/AddPerson/AddDishes',
        component: AddDishes
      },
      {
        path: '/AddPerson/AddDishes/Result',
        component: ResultPage
      }
]

const router = createRouter({
     history: createMemoryHistory(),
     routes
})

export default router