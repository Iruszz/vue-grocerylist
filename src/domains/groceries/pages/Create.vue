<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {addGrocery} from '../store.js';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const grocery = ref({
    name: '',
    price: 0,
    amount: 1,
});

function saveGrocery(updatedGrocery) {
    addGrocery(updatedGrocery);
    router.push('/');
}
</script>

<template>
    <GroceryForm :grocery="grocery" @submit="saveGrocery" />
</template>
