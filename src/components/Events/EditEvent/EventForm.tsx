import { FC, memo, useEffect, useMemo } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { Button, Input, Select } from 'antd'
import { DateTimePicker } from '@/components/generetic'
import { useGetCategoriesQuery } from '@/store/api/category.api'
import { getCalendar } from '@/store/selectors'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IEvent } from '@/types/event.types'
import s from './edit-event.module.less'

export interface EventFormFields {
  name: string
  expiry: Date
  withoutTime: string
  description?: string
  categoryId: number
}

interface EventFormProps {
  event?: IEvent
  onSubmit?: (data: Partial<IEvent>) => void
}

export const EventForm: FC<EventFormProps> = memo(({ event, onSubmit }) => {

  const { data: categories, isLoading } = useGetCategoriesQuery()
  const { selectedDate, isEventModalVisible } = useTypedSelector(getCalendar)

  const defaultValues = useMemo(() => {
    return event
      ? {
        ...event,
        withoutTime: event.withoutTime ? 'none' : 'time'
      }
      : {
        name: '',
        description: '',
        expiry: selectedDate,
        categoryId: categories?.[0].id,
        withoutTime: 'none'
      }
  }, [event, selectedDate, categories])


  const { handleSubmit, control, setValue, reset } = useForm<EventFormFields>({
    defaultValues
  })
  const timeType = useWatch({ control, name: 'withoutTime' })


  const submitHandler = async (data: EventFormFields) => {
    onSubmit?.({ ...data, withoutTime: data.withoutTime === 'none' })
  }

  useEffect(() => {
    if (isEventModalVisible) reset(defaultValues)
  }, [isEventModalVisible])

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name='name'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              className={s.name}
              placeholder='Добавьте название'
              autoComplete='off'
              {...field}
            />
          )}
        />

        <Controller
          name='expiry'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DateTimePicker
              timeType={timeType}
              onChangeTimeType={value => setValue('withoutTime', value)}
              {...field}
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <Input.TextArea
              className={s.description}
              placeholder='Добавьте описание'
              {...field}
            />
          )}
        />

        <Controller
          name='categoryId'
          control={control}
          render={({ field }) => (
            <Select
              className={s.categories}
              loading={isLoading}
              {...field}
            >
              {categories?.map(cat =>
                <Select.Option key={cat.id} value={cat.id}>{cat.name}</Select.Option>
              )}
            </Select>
          )}
        />

        <Button
          className={s.submit}
          type='primary'
          htmlType='submit'
        >
          Сохранить
        </Button>
      </form>
    </div>
  )
})