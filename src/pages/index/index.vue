<template>
  <view class="content" @tap="visible = true">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
  <overlay :visible="visible" @click="visible = false" />
</template>

<script setup lang="ts">
// import overlay from '/@/components/overlay/index.vue'
import dayjs from 'dayjs'
const title = ref('Hello')
const visible = ref(false)
watch(visible, visible => visible && console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')))

onShow(() => {
  console.log('onShow')
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
