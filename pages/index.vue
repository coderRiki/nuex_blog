<template>
  <div v-for="blog in blogList" :key="blog.id">
    <BlogPost :blog="blog"></BlogPost>
  </div>
</template>

<script setup>

import { useBlogStore } from '@/store/blogStore.ts';
const blogStore = useBlogStore();
const blogList = blogStore.blogList   
</script>
