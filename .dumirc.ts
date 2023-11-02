import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: [
    // 完整地址
    // 'https://domain.com/favicon.ico',
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/docker-awesome/logo.png',
  ],
  base: '/docker-awesome/',
  publicPath: '/docker-awesome/',
  title: 'docker-awesome',
  outputPath: 'docs-dist',
  themeConfig: {
    logo: '/docker-awesome/logo.png',
    name: 'docker-awesome',
    socialLinks: {
      github: 'https://github.com/docker-awesome',
    },
  },
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
});
