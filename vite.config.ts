import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // server: {
  //   port: 80,
  //   open: false,
  //   base: "./ ",
  //   proxy: {
  //     '^/api': {
  //       // target: 'http://45.152.67.136:8880',
  //       target: 'http://45.152.67.136:8880',// 后端服务实际地址
  //       changeOrigin: true, //开启代理
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  plugins: [
    VueRouter({ importMode: 'sync' }),
    vue(),
    Components({ resolvers: [
        HeadlessUiResolver(),

      ],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/head', VueRouterAutoImports],

    }),
  ],


})
