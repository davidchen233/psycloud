import { useState, useEffect } from 'react';
import EventModal from './EventModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const [event, setEvent] = useState({ period: '', date: '' });
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   effect

  // }, [])

  const openEventModalCreate = (info) => {
    setShow(true);
    let getTime = { date: info.dateStr, period: '' };
    setEvent(getTime);
    console.log(info);
  };

  const openEventModalEdit = (info) => {
    setShow(true);
    let getTime = { date: info.dateStr, period: '1' };
    setEvent(getTime);
    console.log(info);
  };

  const closeEventModal = () => {
    setShow(false);
  };

  return (
    <>
      <EventModal show={show} closeEventModal={closeEventModal} event={event} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="zh-tw"
        initialView="dayGridMonth"
        height={780}
        fixedWeekCount={false}
        selectable={true}
        editable={true}
        dateClick={openEventModalCreate}
        eventClick={openEventModalEdit}
        events={[{ title: 1, date: '2021-11-01' }]}
      />
    </>
  );
};

export default Calendar;
