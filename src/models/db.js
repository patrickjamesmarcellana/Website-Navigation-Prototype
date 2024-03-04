import "dotenv/config"
import mongoose from "mongoose"

export const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected.")
}

export const disconnect = async () => {
    await mongoose.connection.close()
    console.log("MongoDB Disconnected.")
}