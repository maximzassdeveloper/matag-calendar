import { Popover } from 'antd'
import { FC, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import s from './create-category.module.less'

const colors = ['#333333', '#4F4F4F', '#BDBDBD', '#EB5757', '#F2994A', '#F2C94C', '#219653', '#2F80ED', '#56CCF2', '#9B51E0', '#BB6BD9']

interface ColorModalProps {
  color?: string
  onChange?: (color: string) => void
  onPick: (color: string) => void
}

const ColorModal: FC<ColorModalProps> = ({ color, onChange, onPick }) => {
  return (
    <>
      <HexColorPicker color={color} onChange={onChange} className={s.colorWrapper} />
      <div className={s.standartColors}>
        {colors.map(col =>
          <span
            key={col}
            style={{ background: col }}
            onClick={() => onPick(col)}
          />
        )}
      </div>
    </>
  )
}

interface ColorSelectProps {
  value?: string
  onChange?: (color: string) => void
}

export const ColorSelect: FC<ColorSelectProps> = ({ value: color, onChange }) => {

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
        className={s.color}
        style={{ background: color }}
      />
    </Popover>
  )
}