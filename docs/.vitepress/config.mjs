import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Dev Notes",
  description: "Web dev notes in Markdown",
  base: '/webdev.notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Advanced CSS', link: '/Udemy/S8_Advanced_CSS.md' },
          { text: 'Flexbox', link: '/Udemy/S9_Flexbox.md' }
        ]
      }
    ],
    footer: {
			copyright: `Copyright © ${new Date().getFullYear()} National Institute of Technology Calicut`,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
		hostname: 'https://vinitkesh.github.io',
	},
})
