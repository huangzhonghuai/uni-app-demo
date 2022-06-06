interface ImportMetaEnv {
  // 构建平台
  UNI_PLATFORM: 'h5' | 'mp' | 'mp-weixin' | 'mp-alipay'
  // 应用名称
  VITE_APP_NAME: string
  // 应用构建环境
  VITE_APP_NODE_ENV: 'development' | 'production' | 'test' | 'pre'
  // 应用接口基路径
  VITE_APP_API_BASEURL: string
  // 资源路径
  VITE_APP_RESOURCESURL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
