import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  //vite.config.ts
  // server: {
  //   port: 2700,
  //   open: false, //自动打开
  //   base: "./ ", //生产环境路径
  //   proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
  //     // 正则表达式写法
  //     '^/api': {
  //       target: 'http:127.0.0.1:8880', // 后端服务实际地址
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
