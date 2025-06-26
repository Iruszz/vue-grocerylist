<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {ref} from 'vue';
import {getGroceryById, updateGrocery} from '../store.js';
import {useRoute} from 'vue-router';

const route = useRoute();
const id = Number(route.params.id);

const grocery = ref({...getGroceryById(id).value});

function saveGrocery(updatedGrocery) {
    updateGrocery(updatedGrocery);
}
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="saveGrocery" />
</template>
