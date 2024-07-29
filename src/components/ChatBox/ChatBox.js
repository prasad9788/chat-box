import React from 'react';
import './ChatBox.css';

function ChatBox({ messages, likeMessage }) {
  return (
    <div className="chat-box">
      {messages.map((msg) => (
        <div key={msg.id} className="chat-message">
          <span><strong>{msg.user}</strong>: {msg.text}</span>
          <span className="like-button" onClick={() => likeMessage(msg.id)}>
            👍 {msg.likes}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
