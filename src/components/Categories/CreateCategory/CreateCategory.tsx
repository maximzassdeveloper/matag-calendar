import { FC } from 'react'
import { Button, Form, Input } from 'antd'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { ColorSelect } from '@/components/generetic'
import { categoryApi } from '@/store/api/category.api'
import { ICategory } from '@/types/event.types'
import s from './create-category.module.less'

interface CreateCategoryProps {
  className?: string
  isVisible: boolean
  submitType: 'create' | 'update'
  curCategory?: ICategory
  onSubmit?: (category?: ICategory) => void
}

export const CreateCategory: FC<CreateCategoryProps> = ({
  className, submitType, isVisible, curCategory, onSubmit
}) => {

  const [createCategory] = categoryApi.useCreateCategoryMutation()
  const [updateCategory] = categoryApi.useUpdateCategoryMutation()

  const submitHandler = async ({ name, color }: Partial<ICategory>) => {
    if (submitType === 'update') {
      if (!curCategory?.id) return

      const resp: any = await updateCategory({ id: curCategory.id, name, color } as ICategory)
      if (resp.data) onSubmit?.(resp.data)

    } else {
      const resp: any = await createCategory({ name, color })
      if (resp.data) onSubmit?.(resp.data)
    }
  }

  return (
    <CSSTransition in={isVisible} timeout={200} classNames={{ ...s }} mountOnEnter unmountOnExit>
      <div className={classNames(s.wrapper, className)}>
        <Form
          className={s.form}
          onFinish={submitHandler}
          initialValues={curCategory ? curCategory : { color: '#EB5757' }}
        >

          <Form.Item name='color'>
            <ColorSelect className={s.color} />
          </Form.Item>

          <Form.Item
            name='name'
            rules={[{ required: true, message: '' }]}
            style={{ width: '100%' }}
          >
            <Input
              className={s.input}
              placeholder='Название'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className={s.submit}
            >
              <i className='ph-check-bold' />
            </Button>
          </Form.Item>

        </Form>
      </div>
    </CSSTransition>
  )
}