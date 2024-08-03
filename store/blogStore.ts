import { defineStore } from 'pinia';
import { getIssuesList } from '@/api/github';
import type { Blog } from '~/types/blog';
type BlogState = {
  loading: boolean;
  blogList: Array<Blog>;
};

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => {
    return {
      loading: false,
      blogList: [],
    };
  },
  getters: {},
  actions: {
    async getBlogList() {
      try {
        const { data, status } = await getIssuesList();
        if (status.value === 'success') {
          this.blogList = data.value.map((item: any) => {
            return {
              id: item.id,
              title: item.title,
              body: item.body,
              comments: item.comments,
              labels: item.labels,
              created_at: item.created_at,

              // created_at: dayjs(Date.now(),'YYYY-MM-DD','zh-cn'),

              // created_at: dayjs(new Date(item.created_at),'YYYY-MM-DD','zh-cn'),
            };
          });
        }
      } catch (err) {
        return err;
      }
    },
    async initBlogStatus() {
      this.loading = false;
      this.getBlogList();
      this.loading = true;
    },
  },
});
