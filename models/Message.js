const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
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
