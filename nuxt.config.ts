import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        baseApiUrl: '',
    },
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            "@fortawesome/free-solid-svg-icons"
        ]
    },
    fontawesome: {
        icons: {
            solid: true,
            brands: true,
            // regular: true
        },
    },
})
