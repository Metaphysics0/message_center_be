const { msgMethods } = require('../database/messageDB');

// Constructor helper class
class message {
  constructor() {
    this.db = new msgMethods();
  }
  writeMessage = (message) => {
    return this.db.writeMessage(message);
  };
  readMessage = (id) => {
    return this.db.readMessage(id);
  };
  deleteMessage = (id) => {
    return this.db.deleteMessage(id);
  };
  getAllMsgs = (senderName) => {
    return this.db.getAllMsgs(senderName);
  };
  getAllUnread = (senderName) => {
    return this.db.getAllUnread(senderName);
  };
  getAll = () => {
    return this.db.getAll();
  };
}

module.exports = new message();
