import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayers = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <>
      <div className="video-container">
        {stream && (
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className="chat-video"
          />
        )}
        {callAccepted && !callEnded && (
          <video
            playsInline
            muted
            ref={userVideo}
            autoPlay
            className="chat-video"
          />
        )}
      </div>
    </>
  );
};

export default VideoPlayers;
