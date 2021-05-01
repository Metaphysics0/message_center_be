const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Message schema with required fields
let messageSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, 'Message body is required'],
    },
    sender: {
      type: String,
      required: [true, 'Sender name is required'],
    },
    receiver: {
      type: String,
      required: [true, 'Reciever name is required'],
    },
    subject: {
      type: String,
      default: 'No Subject',
    },
    creationDate: {
      type: Date,
      default: Date.now(),
    },
    messageRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'messages',
  }
);

module.exports = message = mongoose.model('Message', messageSchema);
