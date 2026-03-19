<template>
    <div class="min-h-screen flex">
        <sidebarComponent />
        <div class="flex flex-1 flex-column">
            <HeaderComponent />
            <main class="h-auto flex-1 p-6 mx-3 glass-style">
                <slot />
            </main>
        </div>
    </div>
</template>