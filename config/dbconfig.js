const mongoose = require('mongoose');
const dotenv = require('dotenv');
 

const connectDB = async () => {
       try {
           mongoose.set('strictQuery', false);
           const conn = await mongoose.connect(process.env.MONGO_URL,{usenewUrlParser: true, useUnifiedTopology: true});
               
           console.log(`MongoDB Connected: ${conn.connection.host}`);
       } catch (err) {
           console.error(`Error: ${err.message}`);
           
       }
}

module.exports = connectDB;