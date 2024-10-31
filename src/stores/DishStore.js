import { defineStore } from "pinia";
import { ref } from "vue";

export const useDishStore = defineStore('DishStore', () => {
    const dishes = ref([])

    const initDish = () => {
        const newDish = {
            id: Date.now(),
            name: '',
            price: '',
            
        }
    }

    return {
        dishes,
        initDish
    }
})