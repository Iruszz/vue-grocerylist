// State
import {ref, computed} from 'vue';

let groceries = ref([
    {id: 1, name: 'Brood', price: 1.99, amount: 0},
    {id: 2, name: 'Broccoli', price: 0.99, amount: 0},
    {id: 3, name: 'Krentebollen', price: 2.34, amount: 0},
    {id: 4, name: 'Noten', price: 3.21, amount: 0},
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = grocery => {
    const newId = groceries.value.reduce((maxId, g) => Math.max(maxId, g.id), 0) + 1;
    groceries.value.push({...grocery, id: newId});
};

export function updateGrocery(updatedGrocery) {
    const index = groceries.value.findIndex(g => g.id === updatedGrocery.id);
    if (index !== -1) {
        groceries.value[index] = {...updatedGrocery};
    }
}

export function removeGrocery(id) {
    const index = groceries.value.findIndex(g => g.id === id);
    if (index !== -1) {
        groceries.value.splice(index, 1);
    }
}
