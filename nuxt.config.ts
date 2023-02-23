// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.scss',
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify']
    }
})
