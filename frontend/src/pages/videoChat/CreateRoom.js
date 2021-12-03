import React from 'react';
import { Link } from 'react-router-dom';

const CreateRoom = (props) => {
  return (
    <>
      <Link
        to={{
          pathname: '/videoChat/room/',
          state: { roomID: 1 },
        }}
      >
        <button>開始通話</button>;
      </Link>
    </>
  );
};

export default CreateRoom;
