<script setup>
import {ref} from 'vue';

const props = defineProps({
    grocery: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['submit']);

const localGrocery = ref({...props.grocery});

function onSubmit(event) {
    event.preventDefault();
    emit('submit', localGrocery.value);
}
</script>

<template>
    <div class="flex justify-center w-full px-4 py-20">
        <div class="w-full max-w-xl px-15 space-y-8">
            <div class="">
                <h1>Create a grocery</h1>
            </div>
            <form @submit="onSubmit" class="">
                <div class="grid grid-cols-1 pl-15 pr-50 gap-y-8 border-b border-gray-900/10 pb-12 -mx-10">
                    <div class="col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-900">Name</label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="name"
                                v-model="localGrocery.name"
                                placeholder="Name"
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div class="col-span-3">
                        <label for="price" class="block text-sm font-medium text-gray-900">Price</label>
                        <div class="mt-2">
                            <input
                                name="price"
                                type="number"
                                v-model.number="localGrocery.price"
                                step="0.01"
                                placeholder="Price"
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div class="col-span-3">
                        <label for="amount" class="block text-sm font-medium text-gray-900">Amount</label>
                        <div class="mt-2">
                            <input
                                name="amount"
                                type="number"
                                v-model.number="localGrocery.amount"
                                placeholder="Amount"
                                value="{{  }}"
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-6 ml-auto flex justify-end gap-x-6">
                    <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
                    <button
                        type="submit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
