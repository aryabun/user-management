<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-8 mx-3 glass-style">
        this is Users
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Users',
    list: [
        {
            title: 'Dashboard',
            link: '/'
        },
        {
            title: 'Users',
            link: ''
        }
    ]
};
</script>