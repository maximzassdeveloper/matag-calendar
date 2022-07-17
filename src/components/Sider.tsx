import { FC } from 'react'
import { Layout } from 'antd'
import { MiniCalendar } from './MiniCalendar/MiniCalendar'

export const Sider: FC = () => {
  return (
    <Layout.Sider className='sider' width={300}>
      <MiniCalendar />
    </Layout.Sider>
  )
}