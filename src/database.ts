import {connect} from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI= `mongodb+srv://${process.env.NAME}:${process.env.PASS}@${process.env.DATABASE}`

export async function startConnection(){
    try{
        await connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
        console.log("Database is connected")
    } catch(e){
        console.log(e)
    }
}