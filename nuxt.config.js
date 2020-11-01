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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
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
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      refresh: {
        // define the Scheme = [refresh, local, cookie, oauth2]
        scheme: 'refresh',
        // define the User options the default in the local Scheme is
        user: {
          property: 'user',
          autoFetch: true
        },

        token: {
          property: 'token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 1800,
          global: true,
          required: true,
          prefix: '_token.',
          expirationPrefix: '_token_expiration.'
        },
        autoLogout: true,
        clientId: false,
        grantType: false,
        scope: false,

        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
          required: true,
          tokenRequired: false,
          prefix: '_refresh_token.',
          expirationPrefix: '_refresh_token_expiration.'
        },

        endpoints: {
          login: {
            url: 'http://localhost:8000/api/token/',
            method: 'post'
          },
          refresh: {
            url: 'http://localhost:8000/api/token/refresh/',
            method: 'post'
          },
          user: {
            url: 'http://localhost:8000/me/',
            method: 'get'
          },
          logout: false
        }

      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {}
}
