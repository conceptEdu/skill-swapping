const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  chatId: { type: String, required: true }, // यह दो यूजर्स की यूनिक ID होगी
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;