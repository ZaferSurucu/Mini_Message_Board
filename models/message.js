const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {type: String, required: true, max: 100},
    user: {type: String, required: true, max: 100},
    added: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', MessageSchema);