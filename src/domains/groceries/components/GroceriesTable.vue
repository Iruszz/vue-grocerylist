<script setup>
import {computed} from 'vue';
import {removeGrocery} from '../store.js';

const {groceries} = defineProps({
    groceries: Array,
});

const TotalCosts = computed(() => {
    return groceries.reduce((totalCost, grocery) => totalCost + grocery.amount * grocery.price, 0);
});

const removeItem = id => {
    removeGrocery(id);
};
</script>

<template>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Grocery list</title>
    </head>
    <body>
        <table id="groceryList" class="w-fit m-25 border-collapse">
            <tbody>
                <tr>
                    <td><strong>Product</strong></td>
                    <td><strong>Prijs</strong></td>
                    <td><strong>Aantal</strong></td>
                    <td><strong>Subtotaal</strong></td>
                    <td><strong></strong></td>
                </tr>
                <tr v-for="product in groceries" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td class="productPrices">{{ product.price }}</td>
                    <td>
                        <input class="productQuantities" type="number" min="0" v-model.number="product.amount" />
                    </td>
                    <td class="productTotalCosts">{{ (product.amount * product.price).toFixed(2) }}</td>
                    <td class="space-x-5">
                        <router-link :to="`/edit/${product.id}`" class="text-indigo-600 hover:underline">
                            Edit
                        </router-link>
                        <button @click="removeItem(product.id)" class="text-indigo-600 hover:underline cursor-pointer">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="3"><strong>Totaal</strong></td>
                    <td id="totalCost" colspan="2">
                        <strong>{{ TotalCosts.toFixed(2) }}</strong>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</template>
