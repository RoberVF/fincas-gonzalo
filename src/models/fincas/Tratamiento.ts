import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataQuantity: Number,
    dataYear: String,
    dataInfo: String,
    dataPlace: String,
})

interface ITratamiento extends Document{
    dataQuantity: number,
    dataYear: string,
    dataInfo: string,
    dataPlace: string
}

export default model<ITratamiento>("Tratamiento", schema)