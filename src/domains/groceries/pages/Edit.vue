<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {getGroceryById, updateGrocery} from '../store.js';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);

const grocery = getGroceryById(id);

function saveGrocery(updatedGrocery) {
    updateGrocery(updatedGrocery);
    router.push('/');
}
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="saveGrocery" />
</template>
