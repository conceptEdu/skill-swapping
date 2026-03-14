const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const server = http.createServer(app);

// 1. मिडलवेयर और राउट्स (Listen से पहले होने चाहिए)
app.use(express.json());

// CORS कॉन्फ़िगरेशन (Render के लिए origin: "*" कर दिया है ताकि एरर न आए)
const io = new Server(server, {
  cors: {
    origin: "*", // टेस्टिंग के लिए सभी को अनुमति दें
    methods: ["GET", "POST"],
  },
});

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('skill-swapping api running ...');
});

// 🔌 Socket connection logic (सारा सॉकेट कोड इसी ब्लॉक के अंदर रहेगा)
io.on("connection", (socket) => {
  console.log(`यूजर जुड़ गया: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`यूजर ID: ${socket.id} ने रूम ज्वाइन किया: ${data}`);
  });

  socket.on("send_message", (data) => {
    // यहाँ डेटाबेस सेविंग का लॉजिक बाद में जोड़ सकते हैं
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("यूजर डिस्कनेक्ट हो गया", socket.id);
  });
});

// 🚀 सर्वर शुरू करें
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`सर्वर और सॉकेट पोर्ट ${PORT} पर चल रहे हैं`);
});
