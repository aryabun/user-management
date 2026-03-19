<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-6 mx-3 glass-style">
        User Profile
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Profile',
    list: [
        {
            title: 'Profile',
            link: ''
        }
    ]
};
</script>