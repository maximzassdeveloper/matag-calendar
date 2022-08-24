import { FC, memo, useState } from 'react'
import { CollapsePanelProps, Skeleton } from 'antd'
import classNames from 'classnames'

import { CategoryItem } from './CategoryItem/CategoryItem'
import { CreateCategory } from './CreateCategory/CreateCategory'
import { SidebarPanel } from '../Layout/Sidebar/SidebarPanel'

import { categoryApi } from '@/store/api/category.api'
import s from './categories.module.less'

export const CategoryWidget: FC<CollapsePanelProps> = memo(({ ...panelProps }) => {

  const { isLoading, data } = categoryApi.useGetCategoriesQuery()
  const [isCreateVisible, setIsCreateVisible] = useState(false)

  const createHandler = () => {
    setIsCreateVisible(false)
  }

  return (
    <SidebarPanel
      createIcon
      onCreateClick={() => setIsCreateVisible(state => !state)}
      {...panelProps}
    >
      <div className={classNames(s.wrapper, { [s.open]: isCreateVisible })}>
        <CreateCategory
          isVisible={isCreateVisible}
          submitType='create'
          onSubmit={createHandler}
        />

        <ul className={s.list}>
          {isLoading
            ? (
              <Skeleton
                active
                title={false}
                paragraph={{ rows: 3, width: '100%' }}
              />
            )
            : (
              data?.map(category =>
                <CategoryItem
                  key={category.id}
                  category={category}
                />
              )
            )
          }
        </ul>
      </div>
    </SidebarPanel>
  )
})