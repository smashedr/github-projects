import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'

import Layout from './Layout.vue'

import GitHubTable from './components/GitHubTable.vue'

// import VPSwiper from '@cssnr/vitepress-swiper'
// import '@cssnr/vitepress-swiper/style.css'

// https://vitepress.dev/guide/extending-default-theme
// noinspection JSUnusedGlobalSymbols
/** @type {import('vitepress').Theme} */
export default {
    ...DefaultTheme,

    Layout: Layout,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('GitHubTable', GitHubTable)

        // app.component('VPSwiper', VPSwiper)
    },
}
