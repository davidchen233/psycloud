import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useParams, useLocation } from 'react-router';
import Peer from 'simple-peer';
import './Room.css';

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, [props.peer]);

  return <video className="video-section" playsInline autoPlay ref={ref} />;
};

// const videoConstraints = {
//   height: window.innerHeight / 2,
//   width: window.innerWidth / 2,
// video: videoConstraints,
// };

const Room = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  // const { roomID } = useParams();
  // const {roomID} = this.props.location.state.params.roomID;
  const { roomID } = useLocation().state.roomID;
  console.log(useLocation().state.roomID);

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:3001/');
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit('join room', roomID);
        socketRef.current.on('all users', (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push({
              peerID: userID,
              peer,
            });
          });
          setPeers(peers);
        });

        socketRef.current.on('user joined', (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });
          const peerObj = {
            peer,
            peerID: payload.callerID,
          };

          setPeers((users) => [...users, peerObj]);
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });

        socketRef.current.on('user left', (id) => {
          const peerObj = peersRef.current.find((p) => p.peerID === id);
          if (peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter((p) => p.peerID !== id);
          peersRef.current = peers;
          setPeers(peers);
        });
      });
  }, [roomID]);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  if (!useLocation().state.roomID) {
    return <h2>無此聊天室</h2>;
  }

  return (
    <div className="room-container">
      <video
        muted
        className="video-section"
        ref={userVideo}
        autoPlay
        playsInline
      />
      {peers.map((peer) => {
        return <Video key={peer.peerID} peer={peer.peer} />;
      })}
      {/* had to write this to overwrite the home page background... */}
      <style>
        {
          '#root {background: linear-gradient(#c5f0ff50, #ffffda50, #ff9bc050);}'
        }
      </style>
    </div>
  );
};

export default Room;
