const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: String,
    content: String,
    machine: Boolean,
    failed_responding: Boolean,
    flagged: Boolean,
    conversation_id: String,
    created_at: Number
}, { _id: false });

const conversationSchema = Schema({
    conversation: [messageSchema]
});

const Conversation = mongoose.model('conversation', conversationSchema);
module.exports = Conversation;