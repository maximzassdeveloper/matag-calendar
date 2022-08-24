import { FC, useState } from 'react'
import { Popover } from 'antd'
import classNames from 'classnames'
import { CreateCategory } from '../CreateCategory/CreateCategory'
import { categoryApi } from '@/store/api/category.api'
import { ICategory } from '@/types/event.types'
import s from './category-item.module.less'

interface CategoryProps {
  category: ICategory
}

export const CategoryItem: FC<CategoryProps> = ({ category }) => {

  const [deleteCategory] = categoryApi.useDeleteCategoryMutation()
  const [isUpdateVisible, setIsUpdateVisible] = useState(false)

  const deleteHandler = () => {
    deleteCategory(category.id)
  }

  const createSubmitHandler = () => {
    setIsUpdateVisible(false)
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
          className={s.color}
          style={{ backgroundColor: category.color ?? '#dfdfdf' }}
        />
        <span className={s.name}>
          {category.name}
        </span>
      </div>

      <Popover
        placement='right'
        trigger='hover'
        overlayClassName={s.actionsModal}
        content={(
          <div className={s.actions}>
            <span onClick={deleteHandler}>Удалить</span>
            <span onClick={() => setIsUpdateVisible(true)}>Изменить</span>
          </div>
        )}
      >
        <span className={s.actionsIcon}><i className='ph-dots-three-vertical-bold' /></span>
      </Popover>
    </div>
  )
}