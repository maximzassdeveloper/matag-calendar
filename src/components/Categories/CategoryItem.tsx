import { FC } from 'react'
import { ICategory } from '@/types/todo-types'

interface CategoryProps {
  category: ICategory
}

export const CategoryItem: FC<CategoryProps> = ({ category }) => {
  return (
    <>
      {category.name}
    </>
  )
}