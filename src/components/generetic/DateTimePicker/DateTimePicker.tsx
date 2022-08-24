import { forwardRef, memo, useMemo } from 'react'
import { Select } from 'antd'
import { CustomTimePicker, DatePicker } from '@/components/generetic'
import s from './date-time.module.less'

interface DateTimeProps {
  value?: Date | string
  timeType: string
  onChangeTimeType: (value: string) => void
  onChange?: (value: Date) => void
}

export const DateTimePicker = memo(forwardRef<any, DateTimeProps>((props, ref) => {

  const { value: date, timeType, onChangeTimeType, onChange } = props
  const value = useMemo(() => new Date(date ?? ''), [date])

  const dateChange = (val: Date) => {
    if (!value) return
    const updated = value
    updated.setFullYear(val.getFullYear())
    updated.setMonth(val.getMonth())
    updated.setDate(val.getDate())
    onChange?.(updated)
  }

  const timeChange = (val: Date) => {
    if (!value) return
    const updated = value
    updated.setHours(val.getHours(), val.getMinutes())
    onChange?.(val)
  }

  return (
    <div className={s.dateTime}>

      <div className={s.item}>
        <span className={s.itemTitle}>Дата</span>
        <DatePicker
          value={value}
          onChange={dateChange}
        />
      </div>

      <div className={s.item + ' ' + s.timeItem}>
        <Select
          className={s.timeTitle}
          dropdownClassName={s.timeDropdown}
          bordered={false}
          value={timeType}
          onChange={onChangeTimeType}
        >
          <Select.Option value='time'>Время</Select.Option>
          <Select.Option value='none'>Без времени</Select.Option>
        </Select>

        <CustomTimePicker
          value={value}
          disabled={timeType === 'none'}
          onChange={timeChange}
        />
      </div>

    </div>
  )
}))