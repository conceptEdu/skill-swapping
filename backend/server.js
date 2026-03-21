const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware'); // ✅ Error middleware import

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());

// CORS + Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('skill-swapping api running ...');
});

// 🔌 Socket connection logic
io.on("connection", (socket) => {
  console.log(`यूजर जुड़ गया: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`यूजर ID: ${socket.id} ने रूम ज्वाइन किया: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("यूजर डिस्कनेक्ट हो गया", socket.id);
  });
});

// ✅ Error handler middleware (सभी routes के बाद लगाएँ)
app.use(errorHandler);

// ✅ MongoDB से कनेक्ट करें, फिर सर्वर शुरू करें
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB से कनेक्शन सफल ✅');
    server.listen(PORT, () => {
      console.log(`सर्वर और सॉकेट पोर्ट ${PORT} पर चल रहे हैं`);
    });
  })
  .catch((err) => {
    console.error('MongoDB कनेक्शन फेल ❌', err.message);
    process.exit(1);
  });