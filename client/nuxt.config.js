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
        src: 'js/gsap.js',
        body: true,
        mode: 'client'
      },
      {
        type: 'text/javascript',
        src: 'js/ScrollMagic.min.js',
        body: true,
        mode: 'client'
      },
      {
        type: 'text/javascript',
        src: 'js/animation.gsap.min.js',
        body: true,
        mode: 'client'
      },
      {
        type: 'text/javascript',
        src: 'js/app.js',
        body: true,
        mode: 'client'
      }
    ]
  },

  css: ['bootstrap/dist/css/bootstrap-grid.css', '~assets/sass/app.scss'],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/i18n'],

  axios: {},

  build: {}
}
