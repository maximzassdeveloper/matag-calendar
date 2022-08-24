import { FC } from 'react'
import { HexColorPicker } from 'react-colorful'
import s from './color-select.module.less'

interface ColorModalProps {
  color?: string
  onChange?: (color: string) => void
  onPick: (color: string) => void
}

const colors = ['#333333', '#4F4F4F', '#BDBDBD', '#EB5757', '#F2994A', '#F2C94C', '#219653', '#2F80ED', '#56CCF2', '#9B51E0', '#BB6BD9']

export const ColorModal: FC<ColorModalProps> = ({ color, onChange, onPick }) => {
  return (
    <>
      <HexColorPicker
        color={color}
        onChange={onChange}
        className={s.colorWrapper}
      />
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