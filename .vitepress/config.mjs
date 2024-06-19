import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Likoo's 知识库",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    //https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '杂货铺', link: '/likoo_files/md/' },
      { text: '探索Linux', link: '/likoo_files/linux_command/' } 
    ],

    // sidebar: [
    //   // {
    //   //   text: '示例',
    //   //   items: [
    //   //     { text: '7z', link: '/7z' },
    //   //     { text: 'API', link: '/api-examples' }
    //   //   ]
    //   // }
    // ],
    sidebar: {
      "/likoo_files/md": set_sidebar("/likoo_files/md"),
    //  "/likoo_files/pdf": set_sidebar("/likoo_files/pdf"),
      "/likoo_files/linux_command": set_sidebar("/likoo_files/linux_command"),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/likoosong' }
    ],
    footer: {copyright: 'Copyright © 2021-present By likoo'}
  }
})
