import React, { useContext, useState } from 'react';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  console.log(me);
  return (
    <div className="options-container">
      <div className="form-container">
        <label for="call">Make the call</label>
        <input
          id="call"
          type="text"
          onChange={(e) => {
            setIdToCall(e.target.value);
          }}
        />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>結束通話</button>
        ) : (
          <button
            onClick={() => {
              callUser(idToCall);
            }}
          >
            Call
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Options;
