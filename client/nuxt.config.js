export default {
  head: {
    title: 'Фармацевтическая компания "Grand Health Marketing" | Ташкент',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/fav.png' }],
    script: [
      {
        type: 'text/javascript',
        src: '/app.js',
        body: true
      }
    ]
  },

  css: ['bootstrap/dist/css/bootstrap-grid.css', '~assets/sass/app.scss'],

  plugins: [
    { src: '~/plugins/vue-scrollmagic.js', ssr: false },
    { src: '~/plugins/gsap.js', ssr: false }
  ],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/i18n'],

  axios: {},

  build: {}
}
