const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // load env variables first

const app = express(); // define app before using it
const server = http.createServer(app); // creating HTTP server

// configuring socket with cors
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // your frontend url
    methods: ["GET", "POST"],
  },
});

// 🔌 Socket connection logic
io.on("connection", (socket) => {
  console.log(`यूजर जुड़ गया: ${socket.id}`);

  // किसी खास रूम में शामिल होना (Chat ID के आधार पर)
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`यूजर ID: ${socket.id} ने रूम ज्वाइन किया: ${data}`);
  });

  // मैसेज भेजने का इवेंट
  socket.on("send_message", (data) => {
    // रूम में मौजूद दूसरे लोगों को मैसेज भेजें
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("यूजर डिस्कनेक्ट हो गया", socket.id);
  });
});

// ✅ ध्यान दें: अब सिर्फ server.listen का उपयोग करें
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`सर्वर और सॉकेट पोर्ट ${PORT} पर चल रहे हैं`);
});

// Middleware और Routes
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('skill-swapping api running ...');
});
socket.on("send_message",async(data)=>{
    // अब हम डेटाबेस में सेव करने का काम API के ज़रिए करेंगे, 
  // लेकिन सॉकेट रीयल-टाइम रेंडरिंग संभालता रहेगा।
  socket.to(data.roomId).emit("receive_message", data);

});