import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import s from './day.module.less'

interface AddEventProps {
  date: Date
}

export const AddEvent: FC<AddEventProps> = ({ date }) => {

  const { openEventCreateModal } = useActions()

  const clickHandler = () => {
    openEventCreateModal(date)
  }

  return (
    <div className={s.addEvent} onClick={clickHandler}>
      <i className='ph-plus-bold' />
      Добавить событие
    </div>
  )
}