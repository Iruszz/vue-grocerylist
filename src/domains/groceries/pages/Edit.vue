<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {ref} from 'vue';
import {getGroceryById, updateGrocery} from '../store.js';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);

const grocery = ref({...getGroceryById(id).value});

function saveGrocery(updatedGrocery) {
    updateGrocery(updatedGrocery);
    router.push('/');
}
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="saveGrocery" />
</template>
