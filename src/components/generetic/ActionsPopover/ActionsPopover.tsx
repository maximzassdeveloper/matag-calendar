import { FC, memo } from 'react'
import { Popover } from 'antd'
import classNames from 'classnames'
import s from './actions.module.less'

interface ActionsPopoverProps {
  onDelete?: () => void
  onUpdate?: () => void
  className?: string
  iconClassName?: string
}

export const ActionsPopover: FC<ActionsPopoverProps> = memo(({
  iconClassName, className, onDelete, onUpdate
}) => {
  return (
    <Popover
      placement='right'
      trigger='hover'
      overlayClassName={s.actionsModal}
      content={(
        <div className={classNames(s.actions, className)}>
          {!!onDelete && <span onClick={onDelete}>Удалить</span>}
          {!!onUpdate && <span onClick={onUpdate}>Изменить</span>}
        </div>
      )}
    >
      <span className={classNames(s.actionsIcon, iconClassName)}>
        <i className='ph-dots-three-vertical-bold' />
      </span>
    </Popover>
  )
})