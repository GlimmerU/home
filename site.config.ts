import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://www.glimmeru.cc',
  lang: 'zh-CN',
  title: 'GlimmerU | 学习交流の小镇',
  subtitle:'from Fly21',
  author: {
    name: 'Fly21',
    avatar: '/avatar.png',
    status: {
      emoji: '🥳',
      message: 'Welcome to here!',
    },
  },
  description: '以微光点亮前路，与你共行。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'Repo',
      link: 'https://docs.glimmeru.cc/',
      icon: 'i-ri-github-fill',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/GlimmerU',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/503997056',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信公众号',
      link: '/wechat.png',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
  },
})
