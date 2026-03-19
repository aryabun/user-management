<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-6 mx-3 glass-style">
        Roles
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
</script>