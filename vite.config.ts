import type {ConfigEnv, UserConfig} from 'vite'

import uniPlugin from '@dcloudio/vite-plugin-uni'
import VitePluginAutoImport from 'unplugin-auto-import/vite'
import VitePluginComponents from 'unplugin-vue-components/vite'

import {resolve} from 'path'
import {loadEnv} from 'vite'
import {dirResolver, DirResolverHelper, AutoGenerateImports} from 'vite-auto-import-resolvers'

// https://vitejs.dev/config/
export default ({mode, command}: ConfigEnv): UserConfig => {
  const {
    BUILD_SOURCEMAP = false,
    BUILD_DROP_CONSOLE = false,
  } = {...process.env, ...loadEnv(mode, process.cwd(), '')}
  const plugins = [
    uniPlugin(),

    DirResolverHelper(),
    VitePluginAutoImport({
      dts: `${types}/plugin-auto-imports.d.ts`,
      imports: [...AutoGenerateImports(), 'uni-app'],
      resolvers: [dirResolver({prefix: 'use', suffix: 'Store', target: 'store/modules'})]
    }),
    VitePluginComponents({
      dts: `${types}/plugin-components.d.ts`,
      globalNamespaces: [],
      directoryAsNamespace: true
    }),
  ]

  return {
    plugins,
    css: {},
    build: {
      target: 'es2015',
      sourcemap: parseBoolean(BUILD_SOURCEMAP),
      brotliSize: false,
      terserOptions: {
        compress: {
          drop_console: parseBoolean(BUILD_DROP_CONSOLE),
          keep_infinity: true
        }
      },
      chunkSizeWarningLimit: 2000
    },
    resolve: {
      alias: {
        '/@/': `${root}/`,
        '/#/': `${types}/`
      }
    },
    envPrefix: ['VITE_', 'UNI_PLATFORM']
  }
}
const root = resolve(__dirname, 'src')
const types = resolve(__dirname, 'types')
const parseBoolean = (value: string | boolean | undefined, defaultValue = false) => {
  if (typeof value === 'undefined') return defaultValue
  if (typeof value === 'boolean') return value
  switch (value.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true
    case 'false':
    case 'no':
    case '0':
      return false
    default:
      return defaultValue
  }
}
