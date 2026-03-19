<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-8 mx-3 glass-style">
        Main Dashboard page <NuxtLink to="/auth/login">Return to Auth</NuxtLink>
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Dashboard',
    list: [
        {
            title: 'Dashboard',
            link: ''
        }
    ]
};
</script>
<!-- <style></style> -->