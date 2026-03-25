<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-full flex flex-col flex-1 p-8 mx-3 mb-3 glass-style">
        <div class="flex flex-col gap-2 mb-3">
            <p class="text-grey-700 uppercase text-muted">General Information</p>
            <div class="flex flex-row gap-2">
                <input class="form-control" type="text" name="firstname" id="firstname" placeholder="First Name">
                <input class="form-control" type="text" name="lastname" id="lastname" placeholder="Last Name">
            </div>
            <input class="form-control" type="text" name="email" id="email" placeholder="Email">
            <input class="form-control" type="password" name="password" id="password" placeholder="Password">
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-grey-700 uppercase text-muted">Role</p>
            <div class="flex flex-wrap gap-2">
                <el-checkbox v-model="checked1" label="Option 1" size="large" />
                <el-checkbox v-model="checked2" label="Option 2" size="large" />
                <el-checkbox v-model="checked1" label="Option 1" size="large" />
                <el-checkbox v-model="checked2" label="Option 2" size="large" />
                <el-checkbox v-model="checked1" label="Option 1" size="large" />
                <el-checkbox v-model="checked2" label="Option 2" size="large" />
                <el-checkbox v-model="checked1" label="Option 1" size="large" />
                <el-checkbox v-model="checked2" label="Option 2" size="large" />
                <el-checkbox v-model="checked1" label="Option 1" size="large" />
                <el-checkbox v-model="checked2" label="Option 2" size="large" />
            </div>
        </div>
        <div class="flex flex-col h-full justify-end  items-end">
            <div class="flex flex-row gap-2">
                <button class="glass-btn text-red-500" @click="goBack">Cancel</button>
                <button class="glass-btn text-green-700" @click="open1">Create</button>
            </div>
        </div>
    </main>
</template>
<script setup>
// import { ref } from 'vue'
const breadCrum = {
    current: 'Create',
    list: [
        {
            title: 'Users',
            link: '/users'
        },
        {
            title: 'Create',
            link: ''
        },
    ]
};

const checked1 = ref(true)
const checked2 = ref(false)

const goBack = useGoBack()

const open1 = ()=>{
    ElNotification({
        title: 'Success',
        message: 'User is created successfully!',
        type: 'success'
    })
    setTimeout(() => {
        goBack()
    }, 2000);
}
</script>