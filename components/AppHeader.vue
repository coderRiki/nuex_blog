<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="content">
      <el-space class="logo" size="large">
        <el-avatar :size="45" :src="circleUrl"></el-avatar>
        <span class="hidden-sm-and-down">Riki's blog</span>
      </el-space>
      <div class="tabs hidden-sm-and-down">
        <el-menu-item
          v-for="(item, index) in muneItems"
          :key="index"
          :index="index"
          >{{ item.title }}</el-menu-item
        >
      </div>
      <el-space class="operation" size="large">
        <el-input
          v-model="keywords"
          style="width: 120px"
          :suffix-icon="Search"
        />
        <el-switch v-model="isDark"></el-switch>
      </el-space>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search, Moon, Sunny } from '@element-plus/icons-vue';
import { useDark } from '@vueuse/core';

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
});

let activeIndex = ref(0);
const keywords = ref('');
const circleUrl =
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const muneItems = ref([
  { title: '首页' },
  { title: '分类' },
  { title: '标签' },
  { title: '归档' },
]);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: space-around;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tabs {
      display: flex;
      .el-menu-item {
        height: 60px;
      }
    }
    .operation {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
