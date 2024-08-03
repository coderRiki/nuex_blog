<template>
  <div class="common-layout">
    <AppHeader></AppHeader>
    <div class="content">
      <div style="width: 200px">111</div>
      <NuxtPage></NuxtPage>
      <div style="width: 200px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'element-plus/theme-chalk/display.css';
import { useBlogStore } from '@/store/blogStore.ts';
const blogStore = useBlogStore();
blogStore.getBlogList();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 100%;
    max-width: 1920px;
    padding: 20px;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
