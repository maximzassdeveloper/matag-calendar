import { FC, PropsWithChildren } from 'react'
import { Collapse, CollapsePanelProps } from 'antd'
import s from './sidebar.module.less'

interface SidebarPanelProps extends CollapsePanelProps {
  createIcon?: boolean
  onCreateClick?: () => void
}

export const SidebarPanel: FC<PropsWithChildren<SidebarPanelProps>> = ({
  children, header, createIcon, onCreateClick, ...rest
}) => {
  return (
    <Collapse.Panel
      extra={createIcon && <span onClick={onCreateClick} className={s.panelIcon}>
        <i className='ph-plus-bold' />
      </span>}
      header={header}
      {...rest}
    >
      {children}
    </Collapse.Panel >
  )
}