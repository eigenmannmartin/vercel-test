export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/sentry',
    'nuxt-client-init-module',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['cookie-universal-nuxt', { parseJSON: false }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: true,
    // extractCSS: true,
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      if (ctx.isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },
  },

  router: {
    middleware: [],
  },

  publicRuntimeConfig: {
    imgix: {
      domain: process.env.IMGIX_DOMAIN
    },
    api: {
      login: process.env.LOGIN_URL,
    },
    axios: {
      browserBaseURL: process.env.API_URL,
    },
  },

  telemetry: false,

  moment: {
    timezone: true,
    defaultTimezone: 'Europe/Zurich',
    defaultLocale: 'de',
    locales: ['de'],
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || '',
    lazy: true,
    publishRelease: false,
    sourceMapStyle: 'hidden-source-map',
    config: {
      environment: process.env.VERCEL_ENV || 'development',
      release: process.env.VERCEL_GIT_COMMIT_SHA || '',
    },
  },
};
