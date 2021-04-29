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
  getById = (id) => {
    return this.db.get(id);
  };
  getAllUnread = (userId) => {
    return this.db.getAllUnread(userId);
  };
  getAll = () => {
    return this.db.getAll();
  };
}

module.exports = new message();
