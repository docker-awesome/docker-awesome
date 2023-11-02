import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/docker-awesome/',
  publicPath: '/docker-awesome/',
  outputPath: 'docs-dist',
  copy: [
    {
      from: 'CNAME',
      to: 'docs-dist',
    },
  ],
  themeConfig: {
    name: 'docker-awesome',
  },
});
