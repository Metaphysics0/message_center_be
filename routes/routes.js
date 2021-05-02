const express = require('express');
const router = express.Router();
const {
  writeMessageDB,
  getUnreadMsgs,
  readMsg,
  deleteMsg,
  getAllMsgs,
} = require('../controllers/messageCtrl');

// To add JWT authentication:
// include auth as the second param in the router.req() function
// i.e. router.get('/get-all/:id', auth, getAllMsgs)
const { auth } = require('../middlewares/auth');

// REST API Routes
router.get('/get-all/:id', getAllMsgs);
router.get('/get-unreads/:id', getUnreadMsgs);
router.post('/write-msg', writeMessageDB);
router.put('/read-msg/:id', readMsg);
router.delete('/delete-msg/:id', deleteMsg);

module.exports = router;
