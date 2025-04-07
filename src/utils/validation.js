const validator = require('validator');

const messageValidation = (req, res) => {
    const { firstName, lastName, emailId, message } = req.body;

    if(!firstName){
        res.status(400).json({ message: "Firstname is required"});
    } else if (!(firstName.length >= 3 && firstName.length <= 20)) {
        res.status(400).json({ message: "Firstname length should be 3 to 20 characters"});
    } else if (!lastName) {
        res.status(400).json({ message: "Lastname is required"});
    } else if (!(lastName.length >= 3 && lastName.length <= 20)) {
        res.status(400).json({ message: "Lastname length should be 3 to 20 characters"});
    } else if (!emailId) {
        res.status(400).json({ message: "Email address is required"});
    } else if (!validator.isEmail(emailId)) {
        res.status(400).json({ message: "Invalid email address"});
    } else if (!message) {
        res.status(400).json({ message: "Message is required"});
    } else if(!(message.length <= 200)) {
        res.status(400).json({ message: "Message should be in 200 words"});
    }
}

module.exports = {
    messageValidation
}