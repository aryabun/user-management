// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules:[
    'nuxt-windicss'
  ],
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@/assets/styles/css/main.css',
    '~/node_modules/boxicons/css/boxicons.min.css'
    
  ]
})
