export const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const getWeekDay = (date: Date) => {
  const oldDay = date.getDay()
  return oldDay === 0 ? 6 : oldDay - 1
}

export const twoDaysEqual = (date1?: Date, date2?: Date) => {
  return date1?.setHours(0, 0, 0, 0) === date2?.setHours(0, 0, 0, 0)
}

export const generateCells = (curDate: Date) => {
  const curYear = curDate.getFullYear()
  const curMonth = curDate.getMonth()
  const firstDay = new Date(curYear, curMonth, 1)
  const lastDay = new Date(curYear, curMonth + 1, 0)
  const cells: Date[][] = []
  let curRow: Date[] = []

  let start = 1 - getWeekDay(firstDay)
  let end = lastDay.getDate() + (6 - getWeekDay(lastDay))

  for (let i = start; i <= end; i++) {
    curRow.push(new Date(curYear, curMonth, i, 0, 0, 0))

    if (curRow.length >= 7) {
      cells.push(curRow)
      curRow = []
    }
  }

  return cells
}