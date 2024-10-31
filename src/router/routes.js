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
        path: '/AddDishes',
        component: AddDishes
      },
      {
        path: '/Result',
        component: ResultPage
      }
]

const router = createRouter({
     history: createMemoryHistory(),
     routes
})

window.addEventListener('beforeunload', () => {
  const currentRoute = router.currentRoute.value.fullPath
  localStorage.setItem('lastRoute', currentRoute)
})

router.beforeEach((to, from, next) => {
  const lastRoute = localStorage.getItem('lastRoute')
  localStorage.getItem('lastRoute', to.fullPath)
  
  if (lastRoute) {
    next({ path: lastRoute })

    localStorage.removeItem('lastRoute')
  }
  else {
    next()
  }
})

export default router