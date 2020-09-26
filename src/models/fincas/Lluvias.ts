import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataQuantity: Number,
    dataYear: String,
    dataInfo: String,
})

interface ILluvias extends Document{
    dataQuantity: number,
    dataYear: string,
    dataInfo: string
}

export default model<ILluvias>("Lluvias", schema)