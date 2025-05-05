import mongoose from "mongoose";

export async function connectDB() {
    try{
        mongoose.connect(process.env.MONGO_URU!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected Successfully");
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error:', err);
            process.exit();
        })
    }
    catch (error) {
        console.log('Somthing went wrong')
        console.log(error)
    }
}