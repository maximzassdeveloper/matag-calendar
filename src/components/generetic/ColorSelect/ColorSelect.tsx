import { FC } from 'react'
import { Popover } from 'antd'
import { ColorModal } from './ColorModal'
import classNames from 'classnames'
import s from './color-select.module.less'

interface ColorSelectProps {
  className?: string
  value?: string
  onChange?: (color: string) => void
}

export const ColorSelect: FC<ColorSelectProps> = ({ className, value: color, onChange }) => {

  const pickStandartColor = (col: string) => {
    onChange?.(col)
  }

  return (
    <Popover
      trigger='click'
      placement='topLeft'
      overlayClassName={s.colorPicker}
      content={<ColorModal color={color} onChange={onChange} onPick={pickStandartColor} />}
    >
      <span
        className={classNames(s.color, className)}
        style={{ background: color }}
      />
    </Popover>
  )
}