import { FC, PropsWithChildren } from 'react'
import { Modal, ModalProps } from 'antd'
import classNames from 'classnames'
import s from './modal.module.less'

interface CustomModalProps extends ModalProps { }

export const CustomModal: FC<PropsWithChildren<CustomModalProps>> = ({
  children, className, title, footer, ...rest
}) => {
  return (
    <Modal
      className={classNames(s.customModal, className, { [s.noTitle]: !title })}
      title={title ? title : 'Заголовок'}
      footer={footer ? footer : null}
      closeIcon={<i className='ph-x-bold' />}
      {...rest}
    >
      {children}
    </Modal>
  )
}