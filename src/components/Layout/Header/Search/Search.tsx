import { ChangeEvent, FC, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Input } from 'antd'
import { SearchItem } from './SearchItem'
import { useLazyGetEventsQuery } from '@/store/api/event.api'
import s from './search.module.less'

export const Search: FC = () => {

  const [value, setValue] = useState('')
  const [getEvents, { events, isLoading }] = useLazyGetEventsQuery({
    selectFromResult: (result) => ({
      events: result.data?.filter(i => i.name.toLowerCase().includes(value.toLowerCase())) ?? [],
      ...result
    }),
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    if (!e.target.value.trim().length) return
    getEvents()
  }

  return (
    <div className={s.search}>
      <Input.Search
        className={s.input}
        name='matag-search'
        placeholder='Поиск'
        allowClear
        loading={isLoading}
        value={value}
        onChange={changeHandler}
      />

      <CSSTransition
        in={!!events?.length && !!value.trim().length}
        timeout={200}
        classNames={{ ...s }}
        mountOnEnter
        unmountOnExit
      >
        <div className={s.list}>
          {events?.map(event =>
            <SearchItem key={event.id} event={event} />
          )}
        </div>
      </CSSTransition>
    </div>
  )
}