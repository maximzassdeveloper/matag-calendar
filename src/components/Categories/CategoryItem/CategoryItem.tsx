import { FC, useState } from 'react'
import classNames from 'classnames'
import { CreateCategory } from '../CreateCategory/CreateCategory'
import { categoryApi } from '@/store/api/category.api'
import { ICategory } from '@/types/event.types'
import { ActionsPopover } from '@/components/generetic'
import s from './category-item.module.less'

interface CategoryProps {
  category: ICategory
}

export const CategoryItem: FC<CategoryProps> = ({ category }) => {

  const { id, name, color, selected } = category
  const [deleteCategory] = categoryApi.useDeleteCategoryMutation()
  const [updateCategory] = categoryApi.useUpdateCategoryMutation()
  const [isUpdateVisible, setIsUpdateVisible] = useState(false)

  const deleteHandler = () => {
    deleteCategory(id)
  }

  const createSubmitHandler = () => {
    setIsUpdateVisible(false)
  }

  const selectHandler = () => {
    updateCategory({ id, selected: !selected })
  }

  return (
    <div className={classNames(s.item, { [s.update]: isUpdateVisible })}>

      <CreateCategory
        className={s.updateEl}
        curCategory={category}
        submitType='update'
        onSubmit={createSubmitHandler}
        isVisible={isUpdateVisible}
      />

      <div className={s.container}>
        <span
          className={classNames(s.color, { [s.notSelected]: !selected })}
          style={{
            backgroundColor: color ?? '#dfdfdf',
            borderColor: color ?? '#dfdfdf'
          }}
          onClick={selectHandler}
        >
          <i className='ph-check-bold' />
        </span>
        <span className={s.name}>
          {name}
        </span>
      </div>

      <ActionsPopover
        onDelete={deleteHandler}
        onUpdate={() => setIsUpdateVisible(true)}
      />
    </div>
  )
}