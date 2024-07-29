import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = {
      id: messages.length,
      user: user_list[Math.floor(Math.random() * user_list.length)],
      text: text,
      likes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const likeMessage = (id) => {
    setMessages(
      messages.map((msg) => 
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  return (
    <div className="App">
      <div className="chat-container">
        <ChatBox messages={messages} likeMessage={likeMessage} />
        <ChatInput addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
