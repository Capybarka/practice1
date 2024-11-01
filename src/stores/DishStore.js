import { defineStore } from "pinia";

export const useDishStore = defineStore('DishStore', {
    state: () => {
        return {
            dishes: []
        }
    },

    actions: {
        initDish() {
            const newDish = {
                id: Date.now(),
                name: '',
                price: '',
                payer: {}
            }
            this.dishes.push(newDish)
            localStorage.setItem('dishes', JSON.stringify(this.dishes))
        },

        loadDishesFromStorage() {
            const storedPersons = localStorage.getItem('persons');
              if (storedPersons) {
                  this.dishes.push(...JSON.parse(storedPersons));
              }
        },

        deleteDish(id) {
            this.dishes = this.dishes.filter(dish => dish.id !== id)
            localStorage.setItem('dishes', JSON.stringify(this.dishes))
        }
    }
})