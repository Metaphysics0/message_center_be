const express = require('express');
const router = express.Router();

const { addMessageDB, getUnreadMsgs, readMsg, deleteMsg } = require('../controllers/messageCtrl');

router.get('/get-unreads/:id', getUnreadMsgs);

router.post('/add-msg', addMessageDB);

router.put('/read-msg/:id', readMsg);

router.delete('/delete-msg/:id', deleteMsg);

module.exports = router;
