export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CODEBOY SAI Official Website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CODEBOY Sai is an Ethereum Virtual Machine (EVM) based musician that is signed to CODE LIFE RECORDS DAO, a decentralized music record label.' },
      { hid: 'keywords', name: 'keywords', content: 'Codeboy, Codeboysai, EVM, Record, Record Based Music Artist, Music, Artist, Sai, Code, Codelife, Codelife Records, Decentralized, Record Label' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.web</link>manifest' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' }
    ]
  },

  loading: {
    color: 'black',
    height: '5px',
  },

  image: {
    // Options
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/eazzie/image/upload/'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/tailwind/tailwind.css',
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Nuxt-Image
    '@nuxt/image',
    // Google fonts
    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    // Font awesome
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  googleFonts: {
    /* module options */
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Caudex: [400, 700],
      Cormorant: [300, 400, 500, 600, 700]
    }
  },

  sitemap: () => ({
      hostname: 'https://codeboysai.com',
      gzip: false
  }),

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
}
