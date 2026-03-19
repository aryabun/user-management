<template>
  <header class="h-20 glass-style flex items-center m-3">
    <div class="flex flex-row flex-1 justify-between p-8">
      <!-- Breadcrum -->
      <div class="flex flex-col">
        <h5>{{ propData?.current }}</h5>
        <el-breadcrumb separator=">">
          <el-breadcrumb-item v-for="(value, key) in propData.list" :key="key" :to="{ path: value.link }">
            <span class="text-gray-500">{{ value.title }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="flex flex-row gap-4 items-center">
        <!-- Start::header-link|dropdown-toggle -->
        <el-dropdown>
          <el-badge is-dot class="item"><i class="bx bx-bell header-link-icon"></i></el-badge>
          <template #dropdown>
            <div class="flex justify-center items-center text-grey-500 italic h-12 w-24 text-center">No Notification</div>
          </template>
        </el-dropdown>


        <el-dropdown>
          <div class="flex flex-wrap items-center">
            <el-avatar
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="></el-avatar>
            <div class="flex flex-col items-start ml-2">
              <div class="text-base">{{ fullName }}</div>
              <div class="text-xs">{{ user.email }}</div>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="navigateTo('/profile')">
                <div class="flex flex-wrap gap-2 p-0.5">
                  <i class='bx bxs-user-rectangle'></i>Profile
                  <!-- <div class="text-base"></div> -->
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click="navigateTo('/auth/login')">
                <div class="flex flex-wrap gap-2 p-0.5">
                  <i class='bx bx-log-in'></i>logout
                  <!-- <div class="text-base"></div> -->
                </div>

              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- <div class="text-xs uppercase">Header</div> -->
      </div>
    </div>
  </header>
</template>
<script setup>
const router = useRouter()
const props = defineProps({
  propData: Object
})
const user = {
  firstname: 'Alaine',
  lastname: 'Smith',
  email: 'alainesmith003@yahoo.com',
}
const fullName = computed(() => {
  return `${user.firstname} ${user.lastname}`
})
</script>