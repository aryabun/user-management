<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-6 mx-3 glass-style">
        Permissions
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Permissions',
    list: [
        {
            title: 'Permissions',
            link: ''
        }
    ]
};
</script>