import {PiniaLogger} from 'pinia-logger'

const store = createPinia()

store.use(
  PiniaLogger({
    disabled: import.meta.env.VITE_APP_NODE_ENV === 'production',
    showDuration: true
  })
)
export default store
