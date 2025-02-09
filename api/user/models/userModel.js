// models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  readingList: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      isRead: { type: Boolean, default: false },
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
