<template>
  <uni-transition custom-class="ui-overlay" :show="props.visible" :duration="props.duration"
                  :mode-class="props.modeClass" :styles="styles" @click="emits('click')" />
</template>
<script lang="ts">
  export default defineComponent({
    // #ifdef MP-WEIXIN
    options: {virtualHost: true},
    // #endif

    // #ifdef H5
    name: 'Overlay'
    // #endif
  })
</script>
<script setup lang="ts">
  import {extend} from 'lodash-es'
  const props = defineProps({
    // 层级
    zIndex: {
      type: Number as PropType<number>,
      default: 10070
    },
    visible: {
      type: Boolean,
      default: false
    },
    // 背景色
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, .5)'
    },
    // 动画时长，单位ms （默认 300 ）
    duration: {
      type: Number,
      default: 300
    },
    modeClass: {
      type: [Array, String, Object],
      default: 'fade'
    },
    // 自定义样式
    customStyle: {
      type: Object as PropType<Recordable>,
      default: () => {}
    }
  })
  const emits = defineEmits(['click'])

  const styles = computed(() => {
    return extend(
      {
        backgroundColor: props.bgColor,
        position: 'fixed',
        zIndex: props.zIndex,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
      },
      props.customStyle
    )
  })
</script>
