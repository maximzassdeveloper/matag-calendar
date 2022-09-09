import { emptySplitApi } from './emptySplit.api'
import { ICategory } from '@/types/event.types'

export const categoryApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query<ICategory[], void>({
      query: () => '/categories/',
      providesTags: ['Category']
    }),
    createCategory: build.mutation<ICategory, Partial<ICategory>>({
      query: cat => ({
        url: '/categories/create',
        method: 'POST',
        body: cat
      }),
      invalidatesTags: ['Category']
    }),
    updateCategory: build.mutation<ICategory, Partial<ICategory>>({
      query: cat => ({
        url: `/categories/update/${cat.id}`,
        method: 'PUT',
        body: cat
      }),
      invalidatesTags: ['Category', 'Event']
    }),
    deleteCategory: build.mutation<void, number>({
      query: (id: number) => ({
        url: `/categories/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Category', 'Event']
    })
  }),
  overrideExisting: false,
})

export const {
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = categoryApi