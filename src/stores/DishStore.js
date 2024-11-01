import { defineStore } from "pinia";

export const useDishStore = defineStore("DishStore", {
  state: () => {
    return {
      dishes: [],
    };
  },

  actions: {
    initDish() {
      const newDish = {
        id: Date.now(),
        name: "",
        price: "",
        payer: {},
      };
      this.dishes.push(newDish);
      localStorage.setItem("dishes", JSON.stringify(this.dishes));
    },

    loadDishesFromStorage() {
      const storedDishes = localStorage.getItem("dishes");
      if (storedDishes) {
        this.dishes.push(...JSON.parse(storedDishes));
      }
    },

    deleteDish(id) {
      this.dishes = this.dishes.filter((dish) => dish.id !== id);
      localStorage.setItem("dishes", JSON.stringify(this.dishes));
    },
  },
});
