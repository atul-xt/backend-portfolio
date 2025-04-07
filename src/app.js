const express = require('express');
const connectDB = require('./config/database');
const Message = require('./models/message');
const { messageValidation } = require('./utils/validation');

const app = express();
app.use(express.json());

app.post('/sendMessage', async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            res.status(400).json({ message: "Fill the above details" });
        }
        const { firstName, lastName, emailId, message } = req.body;
        messageValidation(req, res);
        const user = new Message({ firstName, lastName, emailId, message });
        await user.save();
        res.status(200).json({ message: "Message successfully sent." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/getAllMessage', async (req, res) => {
    try {
        const allMessages = await Message.find({});
        res.status(200).json(allMessages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

app.delete('/deleteMessage/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            res.status(400).json({ message: "User id not defined" });
        }
        const deleteMsg = await Message.findByIdAndDelete(userId);

        if (!deleteMsg) {
            res.status(400).json({ message: "Message not found or already deleted" });
        }
        res.status(200).json({ message: "Message deleted successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

connectDB()
    .then(() => {
        console.log("Database is connected");
        app.listen(3001, () => {
            console.log("Server is listening on the port 3001");
        })
    })
    .catch((err) => {
        console.error("Error: ", err);
    })