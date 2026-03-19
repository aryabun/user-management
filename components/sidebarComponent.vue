<template>
  <aside class="w-64 m-3 flex flex-column glass-style items-center py-8 px-4  pastel-gradient">
    <div class="w-24 h-24 flex items-center justify-center">
      logo
    </div>
    <nav class="w-full space-y-4 h-full items-between">
      <div class="flex flex-col h-full">
        <div class="flex flex-col gap-2">
          <!-- DASHBOARD -->
          <button @click="navigateTo('/')" :class="[route.path === '/' ? 'bg-light-100' : '']" class="flex flex-wrap gap-3 items-center p-2 hover:bg-light-100 rounded " >
            <i class='bx bxs-dashboard'></i>
            <span class="text-gray-700">Dashboard</span>
            <!-- <NuxtLink to="/">Dashboard</NuxtLink> -->
          </button>
          <!-- USER -->
          <button @click="navigateTo('/users')" :class="[route.path.startsWith('/users') ? 'bg-light-100' : '']" class="flex flex-wrap gap-3 items-center p-2 hover:bg-light-100 rounded">
            <i class='bx bxs-group'></i>
            <span class="text-gray-700">Users</span>
            <!-- <NuxtLink to="/users" class="text-gray-700">Users</NuxtLink> -->
          </button>
          <!-- ROLE PERMISSION -->
          <div class="flex flex-col">
            <button @click="isRoleOpen = !isRoleOpen"
              class="flex items-center justify-between w-full p-2 hover:bg-white/40 rounded text-gray-700">
              <div class="flex flex-wrap gap-3 items-center">
                <i class='bx bx-shield-quarter'></i>
                <span>Role / Permission</span>
              </div>
              <i class='bx bx-chevron-right text-xl transform duration-300 ease-in-out'
                :class="{ 'rotate-90': isRoleOpen }">
              </i>
            </button>

            <div class="flex flex-col ml-7 mt-1 transition-all duration-300 ease-in-out overflow-hidden" 
              :class="isRoleOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
              <NuxtLink to="/roles" :class="[route.path.startsWith('/roles') ? 'bg-light-100' : '']" 
                class="py-2 pl-5 border-l-2 border-white/30 hover:bg-white/50 rounded-r-lg text-sm text-gray-600 transition-colors">
                Roles
              </NuxtLink>

              <NuxtLink to="/permissions" :class="[route.path.startsWith('/permissions') ? 'bg-light-100' : '']" 
                class="py-2 pl-5 border-l-2 border-white/30 hover:bg-white/50 rounded-r-lg text-sm text-gray-600 transition-colors">
                Permissions
              </NuxtLink>
            </div>
          </div>
          <button @click="navigateTo('/activity-log')" :class="[route.path.startsWith('/activity-log') ? 'bg-light-100' : '']" class="flex flex-wrap gap-3 items-center p-2 hover:bg-light-100 rounded">
            <i class='bx bx-history'></i>
            <span class="text-gray-700">Activity Log</span>
          </button>
        </div>
        <div class="flex flex-col h-full justify-end">
          <button @click="navigateTo('/auth/login')" class="flex flex-wrap gap-3 items-center p-2 hover:bg-light-100 rounded">
            <i class='bx bx-log-in'></i>
            <span class="text-gray-700">logout</span>
          </button>
        </div>
      </div>
    </nav>
  </aside>
</template>
<script setup>
const isRoleOpen = ref(false);
const route = useRoute()

</script>
<style scoped>
</style>