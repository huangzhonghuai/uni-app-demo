import type {ComponentInternalInstance, PropType as VuePropType} from 'vue'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare namespace Page {
  interface PageInstanceBaseProps {
    $vm: ComponentInternalInstance
    $page: {
      fullPath: string
    }
    options: Recordable
    $routeParams?: object | null
    $passedParams?: object | null
  }
}
declare global {
  // vue
  type PropType<T> = VuePropType<T>
}
