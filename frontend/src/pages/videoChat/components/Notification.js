import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log(callAccepted);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="notification-container">
          <p>心理師已上線，是否開始諮商？</p>
          <button
            onClick={() => {
              answerCall();
            }}
          >
            立即開始
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;
