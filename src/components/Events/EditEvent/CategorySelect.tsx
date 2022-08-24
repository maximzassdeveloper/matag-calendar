import { FC } from 'react'
import { Select, SelectProps } from 'antd'
import { categoryApi } from '@/store/api/category.api'
import s from './edit-event.module.less'

export const CategorySelect: FC<SelectProps> = (props) => {

  const { data: categories, isLoading } = categoryApi.useGetCategoriesQuery()

  return (
    <Select
      className={s.categories}
      loading={isLoading}
      {...props}
    >
      {categories?.map(cat =>
        <Select.Option key={cat.id} value={cat.id}>{cat.name}</Select.Option>
      )}
    </Select>
  )
}