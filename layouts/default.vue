<template>
    <div class="min-h-screen flex">
        <sidebarComponent />
        <div class="flex flex-1 flex-column">
            <slot />
            
            <!-- <HeaderComponent />
            <main class="h-auto flex-1 p-6 mx-3 glass-style">
            </main> -->
        </div>
    </div>
</template>