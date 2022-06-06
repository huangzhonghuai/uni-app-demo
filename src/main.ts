import {createSSRApp} from 'vue'
// #ifdef H5
import {createHead} from '@vueuse/head'
// #endif

import App from '/@/App.vue'
import store from '/@/store'

export const createApp = () => {
  const app = createSSRApp(App)
  // #ifdef H5
  const head = createHead()

  if (import.meta.env.DEV) window.__APP__ = app
  app.use(head)
  // #endif
  app.use(store)
  app.config.globalProperties.$resources_url = import.meta.env.VITE_APP_RESOURCESURL
  return {
    app
  }
}

// 加在这里才不报ts错误，啥原因我也不知道。
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * 资源地址
     */
    $resources_url: string
  }
}
