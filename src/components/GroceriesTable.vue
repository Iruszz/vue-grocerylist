<script setup>
import {ref, computed} from 'vue';

const {products} = defineProps({
    products: Object,
});

const productQuantities = ref([0, 0, 0, 0]);

const productTotalCosts = computed(() => {
    return products.map((product, i) => {
        return product[1] * productQuantities.value[i];
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
        <table id="groceryList">
            <tbody>
                <tr>
                    <td><strong>Product</strong></td>
                    <td><strong>Prijs</strong></td>
                    <td><strong>Aantal</strong></td>
                    <td><strong>Subtotaal</strong></td>
                </tr>
                <tr v-for="(product, index) in products" :key="product[0]">
                    <td>{{ product[0] }}</td>
                    <td class="productPrices">{{ product[1] }}</td>
                    <td>
                        <input
                            class="productQuantities"
                            type="number"
                            min="0"
                            v-model.number="productQuantities[index]"
                        />
                    </td>
                    <td class="productTotalCosts">{{ productTotalCosts[index].toFixed(2) }}</td>
                </tr>
                <tr>
                    <td colspan="3"><strong>Totaal</strong></td>
                    <td id="totalCost">
                        <strong>{{ TotalCosts.toFixed(2) }}</strong>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</template>
