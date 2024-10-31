import { defineStore } from "pinia";
import { useRouter } from 'vue-router'

export const useNavigationStore = defineStore('NavigationStore', () => {
    const router = useRouter()

    const goToAddDishesPage = () => router.push('/AddDishes')

    const goToAddPersonPage = () => router.push('/AddPerson')

    const goToHomePage = () => router.push('/')

    const goToResultPage = () => router.push('/Result')

    return {
        goToAddDishesPage,
        goToAddPersonPage,
        goToHomePage,
        goToResultPage
    }
})