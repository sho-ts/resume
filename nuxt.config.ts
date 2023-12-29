import BasicAuth from 'nuxt-basic-authentication-module';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [[BasicAuth, { enabled: true }]],
  runtimeConfig: {
    basicAuth: {
      productionDomains: ['resume.nanolier.art'],
      pairs: {
        nanolier: process.env.NUXT_BASIC_AUTH_PASSWORD ?? '%.J$fWEQ6p+X+NVH', // パスワードが万が一設定されなかった際のデフォルト値,
      },
    },
  },
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
