const Message = require('../services/messageService');

// Adds message to database
const writeMessageDB = async (req, res) => {
  const messageBody = req.body;
  try {
    const newMsgDB = await Message.writeMessage(messageBody);
    return res.status(201).json({ id: newMsgDB._id, success: newMsgDB });
  } catch (e) {
    res.status(500).json({ error: 'Error writing message, ' + e });
  }
};

// Gets all unread messages
const getUnreadMsgs = async (req, res) => {
  const senderName = req.params.id;
  try {
    const response = await Message.getAllUnread(senderName);
    return res.status(201).json(response);
  } catch (e) {
    return res.status(500).json({ error: 'Unable to get all unread messages, ' + e });
  }
};

const getAllMsgs = async (req, res) => {
  const senderName = req.params.id;
  try {
    const response = await Message.getAllMsgs(senderName);
    return res.status(201).json(response);
  } catch (e) {
    return res.status(500).json({ error: 'Unable to get messages, ' + e });
  }
};

// Returns message as read
const readMsg = async (req, res) => {
  try {
    const response = await Message.readMessage(req.params.id);
    return res.status(201).json(response);
  } catch (e) {
    res.status(500).json({ error: 'Error reading message ' + e });
  }
};
// deletes message
const deleteMsg = async (req, res) => {
  const msgId = req.params.id;
  try {
    const response = await Message.deleteMessage(msgId);
    return res.status(201).json({ message: 'message successfully deleted', body: response });
  } catch (e) {
    res.status(500).json({ error: 'Error deleting message, ' + e });
  }
};

module.exports = { writeMessageDB, getUnreadMsgs, readMsg, deleteMsg, getAllMsgs };
