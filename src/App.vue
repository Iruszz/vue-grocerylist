<script setup>
import Nav from './domains/groceries/components/Nav.vue';
import { getAllGroceries } from './domains/groceries/store.js';

const groceries = getAllGroceries;
</script>

<template>
    <Nav />
    <RouterView :groceries="groceries" />
</template>
