import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataName: String,
    dataYear: String,
    dataInfo: String,
})

interface ICalvaritos extends Document{
    dataName: string,
    dataYear: string,
    dataInfo: string
}

export default model<ICalvaritos>("Calvaritos", schema)