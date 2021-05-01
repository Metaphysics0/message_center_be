const express = require('express');
const router = express.Router();
const {
  writeMessageDB,
  getUnreadMsgs,
  readMsg,
  deleteMsg,
  getAllMsgs,
} = require('../controllers/messageCtrl');

// REST API Routes
router.get('/get-all/:id', getAllMsgs);
router.get('/get-unreads/:id', getUnreadMsgs);
router.post('/write-msg', writeMessageDB);
router.put('/read-msg/:id', readMsg);
router.delete('/delete-msg/:id', deleteMsg);

module.exports = router;
