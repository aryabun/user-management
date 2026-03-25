<template>
    <headerComponent :prop-data="breadCrum" />
    <main class="h-auto flex-1 p-8 mx-3 mb-3 glass-style">
        <search-component v-model="searchQuery" />
        <div class="flex flex-row justify-end w-auto my-2">
            <button class="glass-btn gap-2 px-4" @click="navigateTo('users/create')">
                <div class="flex gap-2 items-center">
                    <i class='bx bx-pencil'></i>
                    <span>Create</span>
                </div>
            </button>
        </div>
        <div class="glass-style p-2">
            <el-table :data="tableData" style="width: 100%;" lazy>
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column align="right" label="Action" width="180">
                    <template #default="scope">
                        <button class="glass-btn my-1 px-2 py-1" @click="navigateTo('users/view')"><i class='bx bxs-show'></i></button>
                        <button class="glass-btn my-1 px-2 py-1 text-blue-500"><i class='bx bx-edit-alt'></i></button>
                        <button class="glass-btn my-1 px-2 py-1 text-red-500"><i class='bx bx-trash'></i></button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </main>
</template>
<script setup>
const breadCrum = {
    current: 'Users',
    list: [
        {
            title: 'Users',
            link: ''
        }
    ]
};
const searchQuery = ref('')
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>