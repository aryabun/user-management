<template>
    <div class="flex flex-wrap item-center">
        <div class="w-full h-screen ">
            <div class="flex flex-row h-full justify-center">
                <div class="flex flex-column justify-center w-1/3 <md:w-11/12">
                    <div class="glass-style h-auto px-12 ">
                        <h2 class="py-12 text-center">Welcome Back!</h2>
                        <input class="my-3 form-control" placeholder="Username" type="text" name="username"
                            id="username">
                        <input class="my-3 form-control" placeholder="Enter Password" type="password" name="password"
                            id="password">
                        <div class="flex flex-row justify-end">
                            <a href="#" class="text-current underline hover:no-underline">Forget password?</a>
                        </div>
                        <div class="flex flex-column items-center">
                            <NuxtLink to="/" class="glass-btn my-3">Login</NuxtLink>
                            <p>or continue with</p>
                            <div class="flex flex-wrap gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style="fill: rgba(0, 0, 0, 1);">
                                    <path
                                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex flex-row pt-12">
                                <p>or <NuxtLink to="/auth/signup" class="text-current underline hover:no-underline">
                                        Register</NuxtLink> new
                                    account</p>
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