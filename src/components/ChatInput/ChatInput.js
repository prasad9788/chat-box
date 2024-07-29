import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatInput.css';

function ChatInput({ addMessage }) {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (text.trim()) {
      addMessage(text);
      setText('');
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="chat-input">
      {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;
