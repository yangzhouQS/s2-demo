import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // root: '/src/modules/module-home/',
  base: '/',
  mode: 'development',
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    eslintPlugin(),
    viteStylelint()
  ],
  server: {
    port: 8090
  },
  resolve: {
    alias: {
      '@styles': '/src/styles',
      '@c': '/src/components',
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.tsx', '.json'],
    dedupe: [],
    // 情景导出package.json 配置中的 exports 字段
    conditions: [],
    // 解析package.json 中的字段
    mainFields: ['module', 'jsnext:main', 'jsnext']
  },
  json: {
    // 是否支持从 .json 文件中进行按名导入
    namedExports: true,
    // 若设置为 true, 导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好
    // 尤其是当 JSON 文件较大时
    // 开启此项， 则会禁用按名导入
    stringify: false
  },

  // 静态资源处理   字符串 || 正则表达式
  assetsInclude: '',
  // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info',
  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  build: {
    // 浏览器兼容性 ‘esnext’ | 'modules'
    target: 'modules',
    // 输出路径
    outDir: resolve(__dirname, 'dist'),
    // 生成静态资源的存放路径
    assetsDir: '../assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
    assetsInlineLimit: 4096,
    // 启动 / 禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 soutrce map 文件
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      input: {
        // admin: resolve(__dirname, 'src/index.html'),
        home: resolve(__dirname, './src/modules/module-home/index.html'),
        user: resolve(__dirname, './src/modules/module-user/index.html')
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  css: {
    // 配置css modules 的行为， 选项被传递给postcss-modules
    modules: {},
    // PostCSS 配置（格式同postcss.config.js）
    // postcss-load-config 的插件配置
    postcss: {},
    preprocessorOptions: {
      less: {
        // additionalData: '@import "./src/styles/color.less"'
      }
    }
  }
})
