import { FC } from 'react'
import { Layout } from 'antd'
import { Header, Sider } from '.'

const { Content } = Layout

export const Wrapper: FC = () => {
  return (
    <Layout>
      <Header />
      <Layout className='content'>
        <Sider />
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}