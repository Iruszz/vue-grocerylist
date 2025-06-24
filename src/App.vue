<script setup>
import {ref} from 'vue';
import GroceriesTable from './components/GroceriesTable.vue';

let products = ref([
    ['Brood', 1.99],
    ['Broccoli', 0.99],
    ['Krentebollen', 2.34],
    ['Noten', 3.21],
]);

import Nav from './domains/groceries/components/Nav.vue';
</script>

<template>
    <Nav />
    <RouterView />
    <GroceriesTable :products="products" />
</template>
