<template>
  <v-sheet 
    color="background-light" 
    class="pa-5 rounded-xl"
  >
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

    <div class="d-flex flex-wrap ga-5 mb-5 justify-center">
      <div class="">
        <v-chip
          prepend-icon="mdi-wallet"          
          variant="flat"
          size="large"
          class="font-weight-bold mr-5 cursor-pointer elevation-5"
          color="primary"
        >
          {{ selectedPayer.name }}
        </v-chip>
      </div>
      <v-btn 
        class="mr-5 elevation-3" 
        color="primary"
        variant="outlined"
        @click="dialog = true"
      >
        <v-icon class="mr-3">mdi-cursor-default-click</v-icon>
        Изменить плательщика
      </v-btn>
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
            <v-btn 
              color="primary" 
              class="align-center mt-2"
              @click="checkedAllPersons"
            > 
              {{ allPersonsSelected ? 'Отменить выбор': 'Все' }}
            </v-btn>
            <v-checkbox
              v-for="person in PersonStore.persons"
              v-model="selectedPersons"
              dense
              color="primary"
              :key="person.id"
              :label="person.name"
              :value="person"
            >
            </v-checkbox>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-dialog 
    v-model="dialog" 
    width="auto"
    >
      <v-card 
      class="pa-10" 
      color="background-light"
      >
        <v-radio-group v-model="selectedPayer">
          <p class="font-weight-bold mb-5">
            Выберите того, кто платил за это блюдо
          </p>
          <v-radio
            v-for="person in PersonStore.persons"
            :key="person.id"
            :label="person.name"
            :value="person"
          >
          </v-radio>
        </v-radio-group>
      </v-card>
    </v-dialog>

    <div class="d-flex justify-center">
      <v-btn 
        icon
        color="red" 
        class="elevation-5"
        @click="deleteDish(dish)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
    
  </v-sheet>
</template>

<script setup>
import { ref, watch } from "vue";
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

const dialog = ref(false);

const deleteDish = (dish) => {
  DishStore.deleteDish(dish.id);
};

const selectedPayer = ref(PersonStore.persons[0]);

const selectedPersons = ref([]); // 
const allPersonsSelected = ref(false)

watch(selectedPersons, (newValue) => {
  if (newValue.length === PersonStore.persons.length) {
    allPersonsSelected.value = true
  }
  else {
    allPersonsSelected.value = false
  }
})

const checkedAllPersons = () => {
  if (allPersonsSelected.value) {
    selectedPersons.value = []
  }
  else {
    selectedPersons.value = [...PersonStore.persons]
  }
}
</script>
