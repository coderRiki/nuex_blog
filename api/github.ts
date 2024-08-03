import { httpRequest } from "./index";

const USER_NAME = 'coderRiki';
const BLOG_REPO = 'articles'
const http = httpRequest({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'Bearer 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',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
enum Api {
  getUserInfo = `/users/${USER_NAME}`,
  getIssuesList = `/repos/${USER_NAME}/${BLOG_REPO}/issues`
}

export const getUserInfo = async () => {
  return await http.get(Api.getUserInfo);
}

export const getIssuesList = async () => {
  return await http.get(Api.getIssuesList);
}

