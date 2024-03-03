import { connect } from "./db.js"
// import { Menu } from "./Menu.js"

async function main() {
    try {
        await connect()
        console.log("MongoDB Connected")
    } catch (err) {
        console.error(err)
        process.exit()
    }
}

main()