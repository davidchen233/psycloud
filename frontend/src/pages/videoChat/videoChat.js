import React from 'react';
import Options from './components/Options';
import VideoPlayers from './components/VideoPlayers';
import Notification from './components/Notification';
import './videoChat.scss';
import { ContextProvider } from './SocketContext';

const videoChat = () => {
  return (
    <ContextProvider>
      <>
        <div className="videoChat-wrapper">
          <h1>線上諮商室</h1>
          <VideoPlayers />
          <Options>
            <Notification />
          </Options>
        </div>
        {/* had to write this to overwrite the home page background... */}
        <style>
          {
            '#root {background: linear-gradient(#c5f0ff50, #ffffda50, #ff9bc050);}'
          }
        </style>
      </>
    </ContextProvider>
  );
};

export default videoChat;
