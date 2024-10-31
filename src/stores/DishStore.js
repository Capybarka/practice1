import { defineStore } from "pinia";
import { ref } from "vue";

export const useDishStore = defineStore('DishStore', () => {
    const dishes = ref([])

    const addDish = () => {
        dishes.push(Date.now())
    }

    return {
        dishes,
        addDish
    }
})