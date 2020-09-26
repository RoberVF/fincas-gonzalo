import {connect} from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI= "mongodb+srv://admin:dontfake1@fincas.9hyxb.mongodb.net/test"

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