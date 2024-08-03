<template>
  <el-card class="card" shadow="hover">
    <el-space direction="vertical" alignment="start">
      <div class="title">
        {{ blog.title }}
      </div>
      <div>
        <el-text line-clamp="3">{{ blog.body }}</el-text>
      </div>
      <el-space>
        <el-text>{{ createTime }}</el-text>
        <el-space
          ><el-tag
            class="tag"
            :hit="false"
            :color="'#' + label.color"
            v-for="label in blog.labels"
            :key="label.id"
            >{{ label.name }}</el-tag
          ></el-space
        >
      </el-space>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Blog } from '~/types/blog';
import dayjs from 'dayjs';
const props = defineProps({
  blog: {
    type: Object,
    default: {},
  },
});
const { blog } = props;
const createTime = computed(() => {
  return dayjs(blog.created_at).format('YYYY-MM-DD').toString();
});
// import MarkdownIt from 'markdown-it'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'

// const config = useRuntimeConfig()
// const post = ref({content: ''})
// const loading = ref(false)

// let md: any = new MarkdownIt({
//   html: true,
//   linkify: true,
//   typographer: true,
//   breaks: true,        // Convert '\n' in paragraphs into <br>
//   highlight: function (str:any, lang:any) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return `<pre><code class="language-${lang} hljs">` +
//                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
//                '</code></pre>';
//       } catch (__) {}
//     }

//     return '<pre><code class="language-none hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
//   }
// })
// let result = md.render(blog.body)
// // console.log('blog:', blog);

</script>

<style lang="scss" scoped>
.card:hover {
  cursor: pointer;
}

.card {
  width: 100%;
  max-width: 600px;
  min-width: 480px;
  .title {
    font-size: 20px;
    font-weight: bolder;
  }
  .tag {
    color: #ffffff;
    border: 0;
  }
}
</style>
