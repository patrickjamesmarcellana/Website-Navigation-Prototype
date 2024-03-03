import { connect } from "./db.js"
import mongoose from "mongoose"
import Menu from "./menu.js"

async function main() {
    try {
        await connect()
        console.log("MongoDB Connected")
    } catch (err) {
        console.error(err)
        process.exit()
    }

    const db = mongoose.connection

    // drop collection first
    db.once('open', async() => {
        try {
            await mongoose.connection.db.dropDatabase();
            console.log('facebook-help-center dropped successfully.')
        } catch(err) {
            console.error(err)
        }
    })

    try {
        const result = await Menu.create({
            name: "Using Facebook",
            nestLevel: 1
        })
    } catch (err) {
        console.error(err)
    }
    
    db.close()
}

main()