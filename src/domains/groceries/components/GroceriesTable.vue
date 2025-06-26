<script setup>
import {ref, computed, watch} from 'vue';

const {groceries} = defineProps({
    groceries: Array,
});

const productQuantities = ref([]);

watch(
    () => groceries,
    newGroceries => {
        productQuantities.value = newGroceries.map((g, i) => productQuantities.value[i] ?? 0);
    },
    {immediate: true},
);

const productTotalCosts = computed(() => {
    return groceries.map((product, i) => {
        return product.price * productQuantities.value[i];
    });
});

const TotalCosts = computed(() => {
    return productTotalCosts.value.reduce((acc, item) => acc + item, 0);
});
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
                <tr v-for="(product, index) in groceries" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td class="productPrices">{{ product.price }}</td>
                    <td>
                        <input
                            class="productQuantities"
                            type="number"
                            min="0"
                            v-model.number="productQuantities[index]"
                        />
                    </td>
                    <td class="productTotalCosts">{{ productTotalCosts[index].toFixed(2) }}</td>
                    <td>
                        <router-link :to="`/edit/${product.id}`" class="text-indigo-600 hover:underline">
                            Edit
                        </router-link>
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
