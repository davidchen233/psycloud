import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';
import './chat.css';
import { BiSend } from 'react-icons/bi';
// import axios from 'axios';
const socket = io.connect('http://localhost:3001');

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  let user = JSON.parse(localStorage.getItem('user'));
  const sendMessage = async () => {
    let user = JSON.parse(localStorage.getItem('user'));
    // let user = await axios.get('http://localhost:3001/api/users/userInfo');
    if (currentMessage !== '') {
      const messageData = {
        author: user.username,
        avatar: user.avatar,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
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
                  id={user.username === messageContent.author ? 'you' : 'other'}
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
                    <img src="/sources/signin.jpg" alt="" />
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
            placeholder="來說點什麼 ..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(e) => {
              e.key === 'Enter' && sendMessage();
            }}
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
