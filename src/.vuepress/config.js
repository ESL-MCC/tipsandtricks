const { description } = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MCC Tips&Tricks',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      {
        text: 'Meetup',
        link: 'https://www.google.it'
      },
      {
        text: 'Repository',
        link: 'https://github.com/ESL-MCC/tipsandtricks'
      }
    ],
    sidebar: {
      "/m365/": getSideBar("m365", "Microsoft 365")
      // '/m365/': getM365Sidebar(),
      // '/azure/': getAzureSidebar(),
      // '/sql/': getSqlSidebar()
      // { title: "Home", children: [""] },
      // {
      //   title: "Misc",
      //   children: ["more"],
      // },
    },
    sidebarDepth: 2
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]

}

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}

function getM365Sidebar() {
  return [
    {
      title: 'SharePoint',
      collapsable: false,
      children: [
        '/sharepoint/',
        '/sharepoint/modern-ui'
      ]
    },
    {
      title: 'PowerAutomate',
      collapsable: false,
      children: [
        ''        
      ]
    },
  ]
}

function getAzureSidebar() {
  return [
    {
      title: 'PaaS',
      collapsable: false,
      children: [
        '',
        'app-service'
      ]
    }
  ]
}

function getSqlSidebar() {
  return [
    {
      title: 'Sql',
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}