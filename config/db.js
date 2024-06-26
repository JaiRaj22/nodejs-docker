import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold)
        process.exit(1)
    }
};

export default connectDB