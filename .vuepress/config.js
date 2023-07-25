/**
 * @copyRight ytl003.com
 * @description
 */
const { description } = require('../package.json')
const nav = require('./config/nav')
const locales = require('./config/locales')
const blogConfig = require('./config/blog-config')
const sidebar = require('./config/sidebar')
module.exports = {
  title: 'ytl笔记',
  description: description,
  head: [
    ['link', { rel: 'icon', href: 'http://qcdn.ytl003.com/avatar.jpg' }],
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
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    docsRepo: 'https://github.com/ytl003/ytl003.com',
    editLinks: true,
    editLinkText: '在github上编辑！',
    lastUpdated: '最后编辑于',
    locales: locales,
    subSidebar: 'auto',
    // 404公益
    noFoundPageByTencent: false,
    // huawei: true,
    authorAvatar: 'http://qcdn.ytl003.com/avatar.jpg',
    author: 'ytl003',
    // 评论
    valineConfig: {
      appId: 'H9DpbD4dFBhezqnCOsfCoc4w-gzGzoHsz',// your appId
      appKey: 'OUOf5waDIqiArthJfsLczubS' // your appKey
    },
    // 备案
    record: '蜀ICP备2022029753号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 博客配置
    blogConfig: blogConfig,
    nav: nav,
    sidebar: sidebar,
    docsDir: 'docs',
    type: 'blog',
  }
}
