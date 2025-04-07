const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://yatishprajapatstudy:Hk2M38zao0f3AqHj@yatishclustor.sushtrb.mongodb.net/Portfolio'
    );
}


module.exports = connectDB;
