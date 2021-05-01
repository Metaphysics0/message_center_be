const Message = require('../models/Message');

class msgMethods {
  // Writes and stores message in MongoDB
  async writeMessage(msg) {
    try {
      const message = await Message.create({ ...msg });
      return message;
    } catch (e) {
      return { error: 'Error writing message! ' + e };
    }
  }
  // Updates messageRead value to true in MongoDB
  async readMessage(msgId) {
    Message.findByIdAndUpdate(msgId, { messageRead: true }, { new: true }, (err, model) => {
      if (err) {
        return { error: 'error reading message' + err };
      }
      return { statusCode: 200, message: 'success', body: model };
    });
  }
  // Gets all messages for a specific user
  async getAllMsgs(senderName) {
    try {
      const response = await Message.find({ sender: senderName });
      return response;
    } catch (e) {
      return { error: 'Error finding message, ' + e };
    }
  }
  // Gets all unread messages for a specific user
  async getAllUnread(senderName) {
    try {
      const message = await Message.find({
        $and: [{ sender: senderName }, { messageRead: false }],
      });
      return message;
    } catch (error) {
      return { error: 'Could not find messages, ' + e };
    }
  }
  // Delete message
  async deleteMessage(messageId) {
    try {
      const message = await Message.findByIdAndDelete(messageId);
      return message;
    } catch (e) {
      return { error: 'Error trying to delete message, ' + e };
    }
  }
  // Gets all messages stored in MongoDB (for testing)
  async getAll() {
    try {
      const response = await Message.find();
      return response;
    } catch (e) {
      return { error: 'Something went wrong, ' + e };
    }
  }
}
module.exports = { msgMethods };
