const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String, default: "https://via.placeholder.com/150" },
    bio: { type: String },
    city: { type: String },
    teachSkills: [{ skillName: String, level: String }],
    learnSkills: [{ skillName: String, level: String }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;