import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EventModal({ show, closeEventModal, event }) {
  const [eventInfo, setEventInfo] = useState({
    date: '',
    period: '',
  });

  const handleEventInfoChange = (e) => {
    const newEventInfo = { ...eventInfo, [e.target.name]: e.target.value };
    setEventInfo(newEventInfo);
    console.log(newEventInfo);
  };

  return (
    <>
      <Modal show={show} onHide={closeEventModal}>
        <Modal.Header closeButton>
          <Modal.Title>{event.period ? '編輯' : '新增'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex">
            <input
              name="date"
              type="date"
              className="form-control me-4"
              value={event.date}
              onChange={handleEventInfoChange}
            />

            <select
              name="period"
              selected={event.period}
              className="form-select"
              onChange={handleEventInfoChange}
            >
              <option value="">請選擇</option>
              <option value="1">上午 ( 10:00 ~ 12:00 )</option>
              <option value="2">下午 ( 14:00 ~ 16:00 )</option>
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={closeEventModal}>
            取消
          </Button>
          <Button variant="primary">確認新增</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;
