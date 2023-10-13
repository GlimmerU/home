import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonComponents } from 'valaxy-addon-components'
import { addonLightGallery } from 'valaxy-addon-lightgallery'

const safelist = [
  'i-ri-home-line',
  'i-ri-information-line',
  'i-ri-contacts-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '微光育行',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '链接集',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '联系我们',
        url: '/contact/',
        icon: 'i-ri-contacts-line',
        color: 'lightgreen',
      },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: true,
        icp: '京 ICP 备 2023008179 号 - 2',
      },
    },

    bg_image:{
      enable: true,
      url: 'https://chillcicada.com/usr/img/z1.png',
      dark: 'https://chillcicada.com/usr/img/z2.png',
      opacity: 0.8,
    },

    say: {
      enable: false,
      api: '',
      hitokoto: {
      enable: false,
      api: '',
      },
    },

    menu: {
      custom: {
        title: 'about.site',
        url: '/about/site/',
        icon: 'i-ri-information-line',
      },
    },

    fireworks: {
      enable: true,
      colors: [
        '#66A7DD',
        '#3E83E1',
        '#214EC2',
      ],
    },

    colors: {
      primary: 'red',
    },
  },

  unocss: { safelist },

  addons: [
    addonComponents(),
    addonLightGallery(),
  ],
})
