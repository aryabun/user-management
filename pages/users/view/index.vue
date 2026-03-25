<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-8 mx-3 mb-3 glass-style">
        
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Users',
    list: [
        {
            title: 'Users',
            link: '/users'
        },
        {
            title: 'View',
            link: ''
        },
    ]
};
</script>