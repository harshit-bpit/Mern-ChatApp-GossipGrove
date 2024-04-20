import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("Connected to MONGO DB")
    } catch (error) {
        console.log("Error Connecting to DB ", error.message)
    }
}

export default connectToMongoDB