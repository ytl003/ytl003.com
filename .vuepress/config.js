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
  title: '小龙进阶',
  description: description,
  head: [
    ['link', { rel: 'icon', href: 'http://qcdn.ytl003.com/md/2020-12-13/580015827729783.jpg' }],
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
    repo: 'https://gitee.com/ytl003/ytl003/',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://gitee.com/ytl003/ytl003/',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',

    locales: locales,
    subSidebar: 'auto',
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
    blogConfig: blogConfig,
    nav: nav,
    sidebar:sidebar,
    // type: 'blog',
  }
}
