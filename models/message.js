const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    message: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);