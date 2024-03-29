// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon'],
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
