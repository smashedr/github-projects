import { defineConfig } from 'vitepress'
import path from 'path'

const settings = {
  base: '/github-projects', // no trailing slash
  title: 'SmAsHeDr',
  siteTitle: 'CSSNR',
  name: 'Projects',
  description: {
    short: 'Open Source GitHub Projects.',
    long: 'Android Applications, Web Extensions, GitHub Actions, Python and NPM Packages, and More...',
  },
  image: '/images/logo.png',
  image32: '/images/logo32.png',
  color: '#3e63dd',
  source_repo: 'https://github.com/smashedr/github-projects',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  base: `${settings.base}/`, // NOTE: base is also required for meta paths
  vite: {
    resolve: {
      alias: {
        '@public': path.resolve(__dirname, '../docs/public'),
      },
    },
    server: {
      allowedHosts: true,
    },
  },

  ignoreDeadLinks: [/^https?:\/\/localhost/],

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: settings.base + '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: settings.base + settings.image }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: settings.base + settings.image32 }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: settings.color }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.base + settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.base + settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.siteTitle,
    logo: settings.image32,
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      {
        text: 'Pages',
        items: [
          { text: 'GitHub Actions', link: '/pages/github-actions' },
          { text: 'Web Extensions', link: '/pages/web-extensions' },
          { text: 'Android Apps', link: '/pages/android-apps' },
          { text: 'NPM Packages', link: '/pages/npm-packages' },
          //
        ],
      },
      {
        text: 'Sites',
        items: [
          { text: 'CSSNR Actions', link: 'https://actions.cssnr.com/' },
          { text: 'Node Badges', link: 'https://smashedr.github.io/node-badges-docs/' },
          { text: 'Django Files', link: 'https://django-files.github.io/' },
          { text: 'VitePress Swiper', link: 'https://vitepress-swiper.cssnr.com/' },
          { text: 'VitePress Contributors', link: 'https://vitepress-contributors.cssnr.com/' },
          { text: 'VitePress CopyButton', link: 'https://vitepress-copybutton.cssnr.com/' },
          { text: 'Docker Deploy', link: 'https://docker-deploy.cssnr.com/' },
          { text: 'Portainer Deploy', link: 'https://portainer-deploy.cssnr.com/' },
          { text: 'Zipline Android', link: 'https://zipline-android.cssnr.com/' },
          { text: 'Zipline Extension', link: 'https://zipline-extension.cssnr.com/' },
        ],
      },
      { text: 'Support', link: '/support', activeMatch: '^/(support|faq)/?' },
    ],

    socialLinks: [
      { icon: 'vitepress', link: settings.source_repo },
      { icon: 'github', link: 'https://github.com/cssnr' },
      { icon: 'mozilla', link: 'https://addons.mozilla.org/en-US/firefox/user/18021912/' },
      { icon: 'npm', link: 'https://www.npmjs.com/~smashed' },
      { icon: 'googleplay', link: 'https://play.google.com/store/apps/dev?id=8933468453824534870' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Overview', link: '/overview' },
          //
        ],
      },
      {
        text: 'Pages',
        base: '/pages',
        // collapsed: false,
        items: [
          { text: 'GitHub Actions', link: '/github-actions' },
          { text: 'Web Extensions', link: '/web-extensions' },
          { text: 'Android Apps', link: '/android-apps' },
          { text: 'NPM Packages', link: '/npm-packages' },
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'Get Help', link: '/support' },
          //
        ],
      },
    ],

    editLink: {
      pattern: `${settings.source_repo}/blob/master/docs/:path`,
      text: 'View or Edit on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: '1661VTCE0H',
      //   apiKey: 'ddc74a0231783c222ada099a107d68ad',
      //   indexName: 'zipline-android-docs',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
