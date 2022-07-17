import { FC } from 'react'
import { Layout, Typography } from 'antd'

export const Header: FC = () => {
  return (
    <Layout.Header className='header'>
      <Typography.Title level={4}>Todo Place</Typography.Title>
    </Layout.Header>
  )
}