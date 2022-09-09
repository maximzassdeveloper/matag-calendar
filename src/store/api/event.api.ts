import { emptySplitApi } from './emptySplit.api'
import { IEvent } from '@/types/event.types'

interface GetEventsParams {
  date?: Date | string
  catsFilter?: boolean
  search?: string
}

export const eventApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    getEvents: build.query<IEvent[], GetEventsParams | void>({
      query: params => ({
        url: '/events/',
        params: params ? params : undefined
      }),
      providesTags: ['Event']
    }),
    createEvent: build.mutation<IEvent, Partial<IEvent>>({
      query: event => ({
        url: '/events/create',
        method: 'POST',
        body: event
      }),
      invalidatesTags: ['Event']
    }),
    updateEvent: build.mutation<IEvent, Partial<IEvent>>({
      query: event => ({
        url: `/events/update/${event.id}`,
        method: 'PUT',
        body: event
      }),
      invalidatesTags: ['Event']
    }),
    deleteEvent: build.mutation<void, number>({
      query: (id: number) => ({
        url: `/events/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    })
  }),
  overrideExisting: false,
})

export const {
  useGetEventsQuery,
  useLazyGetEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation
} = eventApi