import { FC, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import classNames from 'classnames'
import { EventItem } from '..'
import { IEvent } from '@/types/event.types'
import { useUpdateEventMutation } from '@/store/api/event.api'
import s from './event-list.module.less'

interface EventListDnDProps {
  className?: string
  events: IEvent[]
}

// a little function to help us with reordering the result
const reorder = (list: IEvent[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const EventListDnD: FC<EventListDnDProps> = ({ events: outEvents, className }) => {

  const [items, setItems] = useState(outEvents)
  const [updateEvent] = useUpdateEventMutation()

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) return

    const reordered = reorder(
      items,
      result.source.index,
      result.destination.index
    )

    reordered.forEach((event, index) => {
      if (reordered[index].id !== items[index].id) {
        updateEvent({ id: event.id, order: index })
      }
    })

    setItems(reordered)
  }

  useEffect(() => {
    setItems(outEvents)
  }, [outEvents])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            className={classNames(s.droppable, className, {
              [s.isOver]: snapshot.isDraggingOver,
              [s.isActive]: snapshot.isUsingPlaceholder
            })}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((event, index) => (
              <Draggable key={event.id} draggableId={event.id.toString()} index={index}>
                {provided => (
                  <div
                    className={s.draggable}
                    ref={provided.innerRef}
                    style={{ ...provided.draggableProps.style }}
                    {...provided.draggableProps}
                  >
                    <span className={s.icon} {...provided.dragHandleProps}>
                      <i className='ph-dots-six-vertical-bold' />
                    </span>
                    <EventItem className={s.item} event={event} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}