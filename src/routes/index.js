'use strict'

const express = require('express');
const elastikaControllers = require("../controllers");

const router = express.Router();

router.get('/welcome', elastikaControllers.elastikaHome);
router.post('/chat_ai', elastikaControllers.elastikaPromptBash);
router.post('/chatComments', elastikaControllers.elastikaChatConversation);
router.post('/conversation', elastikaControllers.createConversation);
router.get('/conversation', elastikaControllers.getAllConversation);
router.get('/conversation/:id', elastikaControllers.getConversationById);

module.exports = router;