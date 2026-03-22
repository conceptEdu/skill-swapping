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

// ✅ CORS middleware (for REST API)
app.use(cors({
  origin: process.env.CLIENT_URL, // e.g. https://skill-swapping.vercel.app
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL, // use same env variable
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room: ${roomId}`);
  });

  socket.on("send_message", (data) => {
    console.log("➡️ Message received:", data);
    socket.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected", socket.id);
  });
});

// ✅ Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('skill-swapping API running ...');
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