const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
const server = http.createServer(app);

// ✅ Middleware
app.use(express.json());

// ✅ CORS middleware (routes से पहले लगाएँ)
app.use(cors({
  origin: "http://localhost:5173",   // लोकल React dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`✅ यूजर जुड़ गया: ${socket.id}`);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`यूजर ID: ${socket.id} ने रूम ज्वाइन किया: ${roomId}`);
  });

  socket.on("send_message", (data) => {
    console.log("➡️ Message received:", data);
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ यूजर डिस्कनेक्ट हो गया", socket.id);
  });
});

// ✅ Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('skill-swapping api running ...');
});

// ✅ Error handler middleware
app.use(errorHandler);

// ✅ MongoDB connect + server start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected');
    server.listen(PORT, () => {
      console.log(`✅ Server + Socket running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });