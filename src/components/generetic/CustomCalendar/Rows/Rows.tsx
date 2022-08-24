import { FC, memo, useMemo } from 'react'
import { Cell } from '../Cell/Cell'
import { generateCells, twoDaysEqual } from '../calendar.helper'
import { combineStyles } from '@/utils/combineStyles'
import { IEvent } from '@/types/event.types'
import ownStyles from './rows.module.less'

interface RowsProps {
  curDate: Date
  events?: IEvent[]
  styles?: any
  onCellDayClick?: (date: Date) => void
  onCellClick?: (date: Date) => void
}

export const Rows: FC<RowsProps> = memo(({ curDate, styles, events, onCellDayClick, onCellClick }) => {

  const s = useMemo(() => combineStyles(ownStyles, styles), [ownStyles, styles])

  const cellEvents = (cell: Date) => {
    return events?.filter(i => twoDaysEqual(new Date(i.expiry), cell))
  }

  return (
    <div className={s.rows}>
      {generateCells(curDate).map((row, i) =>
        <div key={i} className={s.row}>
          {row.map(cell =>
            <Cell
              key={cell.getTime()}
              date={cell}
              events={cellEvents(cell)}
              curMonth={curDate.getMonth()}
              styles={styles}
              onDayClick={onCellDayClick}
              onClick={onCellClick}
            />
          )}
        </div>
      )}
    </div>
  )
})