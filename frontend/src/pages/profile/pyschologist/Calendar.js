import { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { API_URL } from '../../../config/config';
import axios from 'axios';
import { PERIOD } from '../../../config/status';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './calendar.css';

const Calendar = () => {
  const MySwal = withReactContent(Swal);
  const [currentEvent, setcurrentEvent] = useState({
    id: '',
    date: '',
    period: '',
  });
  const [event, setEvent] = useState([]);
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: '新增',
    function: createEvent,
  });

  useEffect(async () => {
    // TODO: 換成當下使用者
    let res = await axios(`${API_URL}/reservations/psychologistEvents/1`);
    let eventData = res.data.map((currentEvent) => {
      return {
        event_id: currentEvent.id,
        psychologist_id: currentEvent.psychologist_id,
        period: currentEvent.period,
        start:
          currentEvent.period === 1
            ? `${currentEvent.date.split('T')[0]}T10:00`
            : `${currentEvent.date.split('T')[0]}T14:00`,
        currentdate: currentEvent.date.split('T')[0],
        reserved: currentEvent.reserved,
        user_id: currentEvent.user_id,
        info: currentEvent.info,
        reserved_at: currentEvent.reserved_at,
        backgroundColor: currentEvent.reserved ? '#FF5151' : '#4F4F4F',
      };
    });
    console.log(eventData);
    setEvent(eventData);
  }, []);

  const openEventModalCreate = (info) => {
    setShow(true);
    let getTime = { id: '', date: info.dateStr, period: '' };
    setcurrentEvent(getTime);
    setModalInfo({ title: '新增', function: createEvent });
  };

  const openEventModalEdit = (info) => {
    setShow(true);
    let getTime = {
      id: info.event.extendedProps.event_id,
      date: info.event.extendedProps.currentdate,
      period: `${info.event.extendedProps.period}`,
    };
    setcurrentEvent(getTime);
    setModalInfo({ title: '編輯', function: editEvent });
  };

  const closeEventModal = (e) => {
    setShow(false);
  };

  const handleEventInfoChange = (e) => {
    const newEventInfo = { ...currentEvent, [e.target.name]: e.target.value };
    setcurrentEvent(newEventInfo);
  };

  // 新增事件
  async function createEvent(e) {
    e.preventDefault();
    let postData = {
      psychologist_id: 1,
      date: e.target.date.value,
      period: e.target.period.value,
    };
    console.log(postData);
    let res = await axios.post(`${API_URL}/reservations/createEvent`, postData);
    setShow(false);
    MySwal.fire(res.data.message).then(async () => {
      let res = await axios(`${API_URL}/reservations/psychologistEvents/1`);
      let eventData = res.data.map((currentEvent) => {
        return {
          id: currentEvent.id,
          psychologist_id: currentEvent.psychologist_id,
          period: currentEvent.period,
          start:
            currentEvent.period === 1
              ? `${currentEvent.date.split('T')[0]}T10:00`
              : `${currentEvent.date.split('T')[0]}T14:00`,
          currentdate: currentEvent.date.split('T')[0],
          reserved: currentEvent.reserved,
          user_id: currentEvent.user_id,
          info: currentEvent.info,
          reserved_at: currentEvent.reserved_at,
          backgroundColor: currentEvent.reserved ? '#FF5151' : '#4F4F4F',
        };
      });
      console.log(eventData);
      setEvent(eventData);
    });
  }

  // 編輯事件
  async function editEvent(e) {
    e.preventDefault();
    let postData = {
      id: e.target.id.value,
      date: e.target.date.value,
      period: e.target.period.value,
    };
    console.log(postData);
    let res = await axios.post(`${API_URL}/reservations/editEvent`, postData);
    setShow(false);
    MySwal.fire(res.data.message).then(async () => {
      let res = await axios(`${API_URL}/reservations/psychologistEvents/1`);
      let eventData = res.data.map((currentEvent) => {
        return {
          id: currentEvent.id,
          psychologist_id: currentEvent.psychologist_id,
          period: currentEvent.period,
          start:
            currentEvent.period === 1
              ? `${currentEvent.date.split('T')[0]}T10:00`
              : `${currentEvent.date.split('T')[0]}T14:00`,
          currentdate: currentEvent.date.split('T')[0],
          reserved: currentEvent.reserved,
          user_id: currentEvent.user_id,
          info: currentEvent.info,
          reserved_at: currentEvent.reserved_at,
          backgroundColor: currentEvent.reserved ? '#FF5151' : '#4F4F4F',
        };
      });
      console.log(eventData);
      setEvent(eventData);
    });
  }

  return (
    <>
      <Modal show={show} onHide={closeEventModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex" id="eventForm" onSubmit={modalInfo.function}>
            <input type="text" value={currentEvent.id} hidden name="id" />
            <input
              name="date"
              type="date"
              className="form-control me-4"
              value={currentEvent.date}
              onChange={handleEventInfoChange}
            />
            <select
              name="period"
              value={currentEvent.period}
              className="form-select"
              onChange={handleEventInfoChange}
              required
            >
              <option value="">請選擇</option>
              <option value="1">{PERIOD[1]}</option>
              <option value="2">{PERIOD[2]}</option>
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={closeEventModal}>
            取消
          </Button>
          <Button type="submit" variant="primary" form="eventForm">
            確認送出
          </Button>
        </Modal.Footer>
      </Modal>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="zh-tw"
        initialView="dayGridMonth"
        height={680}
        fixedWeekCount={false}
        selectable={true}
        events={event}
        dateClick={openEventModalCreate}
        eventClick={openEventModalEdit}
      />
    </>
  );
};

export default Calendar;
