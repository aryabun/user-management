<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-8 mx-3 mb-3 glass-style">
        <search-component v-model="searchQuery" />
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Roles',
    list: [
        {
            title: 'Roles',
            link: ''
        }
    ]
};
const searchQuery = ref('')
</script>