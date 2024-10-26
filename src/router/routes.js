import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AddPerson from '../pages/AddPerson.vue'
import AddDishes from '../pages/AddDishes.vue'

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
      }
]

const router = createRouter({
     history: createMemoryHistory(),
     routes
})

export default router