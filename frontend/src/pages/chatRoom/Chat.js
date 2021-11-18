import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';
import { PUBLIC_URL } from '../../config/config';
import './chat.css';
import { BiSend } from 'react-icons/bi';
// import axios from 'axios';
const socket = io.connect('http://localhost:3001');

const Chat = () => {
  function appendZero(time) {
    if (time < 10) return '0' + '' + time;
    else return time;
  }

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([
    {
      author: '心理雲管理員',
      avatar: '/sources/signin.jpg',
      message: '歡迎來到心理雲聊天室',
      time:
        appendZero(new Date(Date.now()).getHours()) +
        ':' +
        appendZero(new Date(Date.now()).getMinutes()),
    },
    {
      author: '心理雲管理員',
      avatar: '/sources/signin.jpg',
      message: '可以和大家說說自己遇到的壓力 ... ',
      time:
        appendZero(new Date(Date.now()).getHours()) +
        ':' +
        appendZero(new Date(Date.now()).getMinutes()),
    },
  ]);
  let user = JSON.parse(localStorage.getItem('user'));
  const sendMessage = async () => {
    let user = JSON.parse(localStorage.getItem('user'));
    // let user = await axios.get('http://localhost:3001/api/users/userInfo');
    if (currentMessage !== '' && user !== null) {
      const messageData = {
        author: user.username,
        avatar: PUBLIC_URL + user.avatar,
        message: currentMessage,
        time:
          appendZero(new Date(Date.now()).getHours()) +
          ':' +
          appendZero(new Date(Date.now()).getMinutes()),
      };
      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    // cb 的 data 為 後端廣播出來的 data
    socket.on('receive_message', (data) => {
      // 接到訊息後塞進 messageList
      setMessageList((list) => [...list, data]);
    });
  }, []);
  return (
    <div className="container">
      <div className="chat-window">
        <div className="chat-header">
          <p className="text-center">心情聊天室</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent, id) => {
              return (
                <div
                  className="message d-flex"
                  id={
                    user && user.username === messageContent.author
                      ? 'you'
                      : 'other'
                  }
                  key={id}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p className="me-1" id="author">
                        {messageContent.author}
                      </p>
                      <p id="time">{messageContent.time}</p>
                    </div>
                  </div>
                  <div className="chatAvatar">
                    <img src={messageContent.avatar} alt="" />
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder={user ? '來說點什麼 ...' : '請先登入才能傳送訊息喔 ...'}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(e) => {
              e.key === 'Enter' && sendMessage();
            }}
            disabled={user ? false : true}
          />
          <button onClick={sendMessage}>
            <BiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
