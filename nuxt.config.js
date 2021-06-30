export default {
    buildDir: 'nuxt-dist',
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** env
    */
    env: {
        BASE_URL: process.env.BASE_URL,
        PORT: process.env.PORT,
    },

    server: {
        port: process.env.PORT, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    loading: {
        color: 'blue',
        height: '1px'
    },

    loadingIndicator: {
        name: 'circle',
        color: '#3B8070',
        background: 'white'
    },

    ssr: false,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css',
        '~/assets/fonts/font-awesome5-pro/css/all.min.css',
        '~/assets/material-style.css'
    ],
    script:[
    {
        src:'~/assets/fonts/font-awesome5-pro/js/all.min.js',
        type: "text/javascript"
    }
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/antd-ui',
        '~/plugins/axios',
        '~/plugins/repositories',
        '~/plugins/moment',
    ],

    /*
    ** Global middleware
    */
    router: {
        middleware: ['check-auth']
    },

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxt/http',
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
    ],

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.BASE_URL, // Default: http://[HOST]:[PORT][PREFIX]
        redirectError: {
            401: '/login',
            404: '/404'
        },

        retry: false, // interceptor retry time request
        debug: false
    },

    /*
    ** Head Property - https://nuxtjs.org/guides/features/meta-tags-seo
    */
    head: {
        bodyAttrs: {
            class: 'bodyAttrs bodyAttrs2'
        },

        htmlAttrs: {
            class: 'htmlAttrs'
        },
        title: "Trang quản lý dịch vụ Nhân Hòa ",
        meta: [
            { title: "Trang quản lý dịch vụ Nhân Hòa"},
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/fav-logo.png' },
            {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap'},
        ],
        
    }, 

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },

        loaders: {
            less: { javascriptEnabled: true }
        },

        babel: {
            presets ({ isServer }, [ preset, options ]) {
                return [
                    [
                        preset, {
                        ...options,
                        targets: isServer ? { node: 'current' } : { android: '4', ie: '9' }
                        }
                    ]
                ]
            }
        }
    }
}