import { FC, memo } from 'react'
import { Collapse } from 'antd'
import { CategoryWidget } from '@/components/Categories/CategoryWidget'
import s from './sidebar.module.less'

export const SidebarCollapse: FC = memo(() => {
  return (
    <Collapse
      className={s.collapse}
      expandIconPosition='end'
      collapsible='header'
      expandIcon={() => <span><i className='ph-caret-down-bold' /></span>}
      ghost
      bordered={false}
      defaultActiveKey={['cats']}
    >
      <CategoryWidget key='cats' header='Категории' />
    </Collapse>
  )
})