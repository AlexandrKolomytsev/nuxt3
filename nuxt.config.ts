// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.scss',
        'vuetify/lib/styles/main.sass',
        '~/assets/css/_fonts.css',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    plugins: [
        './plugins/helpers/is-mobile.client'
    ],
    modules: [['nuxt-swiper', {
        // Swiper options
    }]]
})
