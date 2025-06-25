// State
import {ref, computed} from 'vue';

let groceries = ref([
    { id: 1, name: 'Brood', price: 1.99 },
    { id: 2, name: 'Broccoli', price: 0.99 },
    { id: 3, name: 'Krentebollen', price: 2.34 },
    { id: 4, name: 'Noten', price: 3.21 }
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);