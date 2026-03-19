<template>
    <div class="flex flex-wrap item-center">
        <div class="w-full h-screen ">
            <div class="flex flex-row h-full justify-center">
                <div class="flex flex-column justify-center w-1/3 <md:w-11/12">
                    <div class="glass-style h-auto px-12 ">
                        <h2 class="py-12 text-center">Sign up</h2>
                        <div class="flex flex-row gap-3">
                            <input class="form-control" placeholder="first name" type="text" name="firstname"
                                id="firstname">
                            <input class="form-control" placeholder="lastname" type="text" name="lastname"
                                id="lastname">
                        </div>
                        <input class="my-3 form-control" placeholder="Username" type="text" name="username"
                            id="username">
                        <input class="my-3 form-control" placeholder="email" type="text" name="email" id="email">
                        <input class="my-3 form-control" placeholder="Enter Password" type="password"
                            name="password" id="password">
                        <input class="form-control" placeholder="Confirm Password" type="confirm_pwd"
                            name="confirm_pwd" id="confirm_pwd">
                        <div class="flex flex-column items-center">
                            <NuxtLink to="/" class="glass-btn my-3">Register</NuxtLink>
                            <div class="flex flex-row pt-12">
                                <p>or already has an account, <NuxtLink to="/auth/login"
                                        class="text-current underline hover:no-underline">
                                        Login</NuxtLink> here</p>
                            </div>
                        </div>
                        <!-- <p></p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false
})
</script>