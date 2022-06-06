import {App, PropType as VuePropType} from 'vue'

declare global {
  interface Window {
    Stripe: any
    __APP__: App<Element>
  }
}
