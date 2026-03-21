const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');

// @desc    पुराने मैसेज लोड करें
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId }).populate('sender', 'name pic');
  res.json(messages);
});

// @desc    नया मैसेज सेव करें
const saveMessage = asyncHandler(async (req, res) => {
  const { chatId, text } = req.body;
  const newMessage = await Message.create({
    chatId,
    sender: req.user._id,
    text,
  });
  res.json(newMessage);
});

module.exports = { getMessages, saveMessage };
