import { FC } from 'react'
import { Select, SelectProps } from 'antd'
import { numberToTwo } from '@/utils/helper'
import { format } from 'date-fns'
import s from './time-picker.module.less'

interface CustomTimePickerProps extends SelectProps {
  value?: Date
  onChange?: (value: Date) => void
}

// Generate time array for select
const timeArray: string[] = []
for (let i = 0; i < 60 * 24; i += 15) {
  timeArray.push(`${numberToTwo(Math.floor(i / 60))}:${numberToTwo(i % 60)}`)
}

export const CustomTimePicker: FC<CustomTimePickerProps> = ({
  value = new Date(), onChange, ...rest
}) => {

  const changeHandler = (time: string) => {
    const dateStr = format(value, 'yyyy-MM-dd')
    const date = new Date(`${dateStr}T${time}:00`)
    onChange?.(date)
  }

  return (
    <Select
      value={value ? format(value, 'HH:mm') : '12:00'}
      className={s.timePicker}
      onChange={changeHandler}
      {...rest}
    >
      {timeArray.map(time =>
        <Select.Option key={time} value={time}>{time}</Select.Option>
      )}
    </Select>
  )
}