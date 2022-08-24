import { FC, PropsWithChildren } from 'react'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/es/locale/ru_RU'

if (ruRU.DatePicker?.lang) {
  ruRU.DatePicker.lang = { ...ruRU.DatePicker.lang, locale: 'ru' }
}

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider locale={ruRU}>
      {children}
    </ConfigProvider>
  )
}