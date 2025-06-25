<script setup>
import GroceriesTable from './../components/GroceriesTable.vue';

const {groceries} = defineProps({groceries: Array});
</script>

<template>
    <GroceriesTable :groceries="groceries" />
</template>
