import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import ViteComponents from 'vite-plugin-components';
import fs from 'fs';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    ViteComponents(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-pwa
    // VitePWA({
    //   manifest: {
    //     name: 'Vitesse',
    //     short_name: 'Vitesse',
    //     theme_color: '#ffffff',
    //   },
    // }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {  
      const localePath = path.join('./locales');
      const localeUrls = fs.readdirSync(localePath).map(fileName => {
        return `/${fileName.replace('.json', '')}/`
      });
      return [...localeUrls];
    }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
  },
})
