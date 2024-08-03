export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@element-plus/nuxt', '@pinia/nuxt'],
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/dark/css-vars.css',
  ],
});
