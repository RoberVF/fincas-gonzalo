import {Schema, model, Document} from 'mongoose'

const schema= new Schema({
    dataName: String,
    dataYear: String,
    dataInfo: String,
})

interface IFondo extends Document{
    dataName: string,
    dataYear: string,
    dataInfo: string
}

export default model<IFondo>("Fondo", schema)