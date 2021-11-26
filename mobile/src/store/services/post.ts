import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ENV from 'environments';
import { header } from 'store/services';
import { ReqPosts } from 'types/Request';
import {
  CommunityPost,
  NoticePost,
  ReqNewPost,
  ResCommunityPosts,
  ResNoticePosts,
  ResPostCategory,
} from 'types/Response';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.apiUrl,
    prepareHeaders: header,
  }),
  endpoints: (builder) => ({
    getPostCategories: builder.query<ResPostCategory, void>({
      query: () => '/posts/categories',
      transformResponse: (response: { data: ResPostCategory }) => response.data,
    }),

    getNoticePosts: builder.query<ResNoticePosts, ReqPosts>({
      query: (params) => ({ url: '/posts/notice', params }),
      transformResponse: (response: { data: ResNoticePosts }) => response.data,
    }),
    getNoticePost: builder.query<NoticePost, number>({
      query: (postId) => `/posts/notice/${postId}`,
      transformResponse: (response: { data: NoticePost }) => response.data,
    }),
    getCommunityPosts: builder.query<ResCommunityPosts, ReqPosts>({
      query: (params) => ({ url: '/posts/community', params }),
      transformResponse: (response: { data: ResCommunityPosts }) => response.data,
    }),
    getCommunityPost: builder.query<CommunityPost, number>({
      query: (postId) => `/posts/community/${postId}`,
      transformResponse: (response: { data: CommunityPost }) => response.data,
    }),

    savePost: builder.mutation<void, number>({
      query: (postId) => ({
        url: `/posts/${postId}/save`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
    }),
    unsavePost: builder.mutation<void, number>({
      query: (postId) => ({
        url: `/posts/${postId}/save`,
        method: 'DELETE',
      }),
      transformResponse: (response: { data: void }) => response.data,
    }),
    fixNotice: builder.mutation<void, number>({
      query: (postId) => ({
        url: `/posts/${postId}/fix`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
    }),
    unfixNotice: builder.mutation<void, number>({
      query: (postId) => ({
        url: `/posts/${postId}/fix`,
        method: 'DELETE',
      }),
      transformResponse: (response: { data: void }) => response.data,
    }),

    postCommunity: builder.mutation<void, ReqNewPost>({
      query: (newPost) => {
        const formdata = new FormData();
        newPost.image?.forEach((img) => formdata.append('image', img));
        Object.entries(newPost)
          .filter(([key, _]) => key !== 'images')
          .forEach(([key, value]) => formdata.append(key, value));

        return {
          url: `/posts/community/${newPost.postCategoryId}/post`,
          method: 'POST',
        };
      },
      transformResponse: (response: { data: void }) => response.data,
    }),
  }),
});

export const {
  useGetPostCategoriesQuery,
  useGetNoticePostsQuery,
  useGetNoticePostQuery,
  useGetCommunityPostsQuery,
  useGetCommunityPostQuery,
  useSavePostMutation,
  useUnsavePostMutation,
  useFixNoticeMutation,
  useUnfixNoticeMutation,
  usePostCommunityMutation,
} = postApi;