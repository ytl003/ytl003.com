/**
 * @copyRight ytl003.com
 * @description
 */
const { description } = require('../../package')
module.exports = {
  plugins: ['@vuepress/pwa'],
  title: '小龙进阶',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: description }]
  ],
  theme: 'reco',
  themeConfig: {
    // 备案
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    }
  }
}
