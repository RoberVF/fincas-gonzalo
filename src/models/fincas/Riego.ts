import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataQuantity: Number,
    dataYear: String,
    dataTime: Number,
    dataInfo: String,
})

interface IRiego extends Document{
    dataQuantity: number,
    dataYear: string,
    dataTime: number,
    dataInfo: string
}

export default model<IRiego>("Riego", schema)