export default defineNuxtConfig({
  pages: true,
  components: true,
  css: ["vuetify/styles", "@splidejs/vue-splide/css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss"],
});