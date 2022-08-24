import { format } from 'date-fns'
import ru from 'date-fns/esm/locale/ru'
import _ from 'lodash'

export const localeFormat = (date: Date | number | string, formatStr: string) => {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  if (!formatStr.length) {
    return ''
  }

  const formated = format(date, formatStr, {
    locale: ru
  })

  // Change every first letter to uppercase. because "ru" locale don't make this
  return formated.split(' ').map(i => _.capitalize(i)).join(' ')
}