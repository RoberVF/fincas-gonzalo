import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataName: String,
    dataYear: String,
    dataInfo: String,
})

interface IMedio extends Document{
    dataName: string,
    dataYear: string,
    dataInfo: string
}

export default model<IMedio>("Medio", schema)