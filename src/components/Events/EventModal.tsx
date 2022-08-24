import { FC, memo } from 'react'
import { CustomModal } from '@/components/generetic'
import { EditEvent, EventPreview } from '.'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import { getCalendar } from '@/store/selectors'

export const EventModal: FC = memo(() => {

  const {
    isEventModalVisible,
    modalEventType,
    selectedEvent
  } = useTypedSelector(getCalendar)

  const { closeEventModal } = useActions()

  const renderContent = () => {
    if (!isEventModalVisible) return

    switch (modalEventType) {
      case 'create': return (
        <EditEvent />
      )
      case 'edit': return selectedEvent && (
        <EditEvent event={selectedEvent} />
      )
      case 'preview': return selectedEvent && (
        <EventPreview event={selectedEvent} />
      )
      case 'none': return null
    }
  }

  return (
    <CustomModal
      visible={isEventModalVisible}
      onCancel={closeEventModal}
    >
      {renderContent()}
    </CustomModal>
  )
})