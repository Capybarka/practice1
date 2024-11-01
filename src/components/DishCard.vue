<template>
  <v-sheet color="background-light" class="pa-5 rounded-xl">
    <v-text-field label="Название">
      <template v-slot:prepend>
        <v-icon> mdi-food-fork-drink </v-icon>
      </template>
    </v-text-field>

    <v-text-field label="Цена">
      <template v-slot:prepend>
        <v-icon> mdi-currency-rub </v-icon>
      </template>
    </v-text-field>

    <div class="mb-5">
      <v-row>
        <v-col cols="auto" class="align-center">
          <v-btn @click="dialog = true" class="mr-5" color="primary">
            <v-icon class="mr-3">mdi-cursor-default-click</v-icon>
            Выберите плательщика
          </v-btn>
          <span v-show="selectedPayer" class="ml-1">
            Платил: {{ selectedPayer }}
          </span>
        </v-col>
      </v-row>
    </div>

    <v-expansion-panels
      bg-color="background-dark"
      variant="accordion"
      class="mb-5"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="font-weight-bold">
          Отметьте тех, кто вкусил
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <div class="d-flex flex-wrap ga-8">
            <v-checkbox
              dense
              color="primary"
              v-model="selectedUsers"
              :label="'Все'"
              :value="'all'"
            >
            </v-checkbox>

            <v-checkbox
              v-for="person in PersonStore.persons"
              v-model="selectedUsers"
              dense
              color="primary"
              :key="person.id"
              :label="person.name"
              :value="person.name"
            >
            </v-checkbox>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-dialog v-model="dialog" width="auto">
      <v-card class="pa-10" color="background-light">
        <v-radio-group v-model="selectedPayer">
          <p class="font-weight-bold mb-5">
            Выберите того, кто платил за блюдо
          </p>
          <v-radio
            v-for="person in PersonStore.persons"
            :key="person.id"
            :label="person.name"
            :value="person.name"
          >
          </v-radio>
        </v-radio-group>
      </v-card>
    </v-dialog>

    <v-btn color="primary" variant="outlined" @click="deleteDish(dish)">
      <span class="mr-2 font-weight-bold">Удалить блюдо</span>
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { usePersonStore } from "../stores/PersonStore";
import { useDishStore } from "../stores/DishStore";

defineProps({
  dish: {
    type: Object,
    required: true,
  },
});
const PersonStore = usePersonStore();
const DishStore = useDishStore();

const deleteDish = (dish) => {
  DishStore.deleteDish(dish.id);
};

const dialog = ref(false);

const selectedPayer = ref(null);

const selectedUsers = ref([]);
</script>
