const path = require('path');
import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

const config: UserConfig = {
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  }, 
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') }
    ],
  },
  server: {
    host: true
  },
  plugins: [
    Components({
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    vue(),
  ]
};


export default config