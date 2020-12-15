/**
 * @copyRight ytl003.com
 * @description
 */
const { description } = require('../../package')
module.exports = {
  title: '小龙进阶',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: description }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    //代码主题
    codeTheme: 'default',
    // 404公益
    noFoundPageByTencent: false,
    // huawei: true,
    authorAvatar: 'http://qcdn.ytl003.com/md/2020-12-13/580015827729783.jpg',
    author: '小萌龙',
    // 评论
    valineConfig: {
      appId: 'H9DpbD4dFBhezqnCOsfCoc4w-gzGzoHsz',// your appId
      appKey: 'OUOf5waDIqiArthJfsLczubS' // your appKey
    },
    // 备案
    record: '蜀ICP备16001070',
    recordLink: 'ICP 备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/life/' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '留言', link: '/message/' },
      { text: '关于', link: '/about/' }
    ],
    // type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
      // ...
    ]
  }
}
