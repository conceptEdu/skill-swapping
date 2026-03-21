import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

// सर्वर से जुड़ें
const socket = io.connect("http://localhost:5000");

const ChatScreen = () => {
  const { roomId } = useParams(); // URL से चैट रूम ID लें (उदा: /chat/123)
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    // 1. चैट रूम जॉइन करें
    socket.emit("join_room", roomId);

    // 2. नया मैसेज सुनने का सेटअप
    const receiveHandler = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", receiveHandler);

    // क्लीनअप: कंपोनेंट बंद होने पर लिसनर हटा दें
    return () => socket.off("receive_message", receiveHandler);
  }, [roomId]);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        roomId: roomId,
        sender: userInfo.name,
        text: message,
        time: new Date().toLocaleTimeString(),
      };

      // 3. सर्वर को मैसेज भेजें
      await socket.emit("send_message", messageData);
      
      // अपना मैसेज खुद की लिस्ट में भी जोड़ें
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-xl font-bold border-b pb-3 mb-4">चैट रूम: {roomId}</h2>
      
      {/* मैसेज डिस्प्ले एरिया */}
      <div className="h-96 overflow-y-auto mb-4 p-2 bg-gray-50 rounded-lg">
        {messageList.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === userInfo.name ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 px-4 rounded-2xl max-w-xs ${msg.sender === userInfo.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
              <p className="text-xs opacity-75 font-bold">{msg.sender}</p>
              <p>{msg.text}</p>
              <span className="text-[10px] opacity-50">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* इनपुट एरिया */}
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          placeholder="मैसेज टाइप करें..."
          className="flex-1 border p-3 rounded-full outline-none focus:border-blue-500"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          भेजें
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
