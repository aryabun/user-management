<template>
    <div class="max-w-1/2">
        <div class="overflow-hidden relative flex items-center glass-style">
            <input v-model="props" @keyup.enter="handleSearch" class="bg-transparent flex-1 py-2 px-3 border-none outline-none" type="text" placeholder="Search">
            <button class="py-2 px-4 glass-btn"><i class='bx bx-search'></i></button>
        </div>
        <!-- <ul class="result-list">
            <li v-if="results.length === 0"> No matches found</li>
            <li v-else v-for="res in results">{{ res }}</li>
        </ul> -->
    </div>
</template>
<script setup>
const items = ref([])
const props = defineModel('query')

// const search = ref(props.query)
const results = ref([...items.value])

const handleSearch = ()=>{
    results.value = items.value.filter(item => item.toLowerCase().includes(props.value.toLowerCase()))
};
</script>
<style scoped>
.result-list{
    margin-top: 15px;
    list-style: none;
    padding: 0;
}
.result-list li{
    padding: 8px;
    border-bottom: 1px solid grey;
}
</style>