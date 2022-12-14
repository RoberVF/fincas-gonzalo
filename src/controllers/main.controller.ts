import {Request, Response} from 'express'
import Medio from '../models/fincas/Medio'
import Abajo from '../models/fincas/Abajo'
import Chica from '../models/fincas/Chica'
import Fondo from '../models/fincas/Fondo'
import Calvaritos from '../models/fincas/Calvaritos'
import Lluvias from '../models/fincas/Lluvias'
import Riego from '../models/fincas/Riego'
import Tratamiento from '../models/fincas/Tratamiento'

export async function mainPage(req: Request, res: Response){
    res.render("main")
}

// Finca del medio
export async function fincaMedioForm(req: Request, res: Response){
    const {dataName, dataYear, dataInfo}= req.body
    console.log(req.body)
    const newData= {
        dataName,
        dataYear,
        dataInfo
    }
    const fincaMedio= new Medio(newData)
    await fincaMedio.save()
    res.redirect('fincaMedio')
}
export async function fincaMedioFormView(req: Request, res:Response){
    res.render("medio/addDataMedio")
}
export async function fincaMedioView(req: Request, res: Response){
    const fincaMedio= await Medio.find().sort({_id: -1}) //Mas nuevo primero
    res.render("medio/fincaMedio", {fincaMedio})
}

//Finca abajo
export async function fincaAbajoForm(req: Request, res: Response){
    const {dataName, dataInfo, dataYear}= req.body
    console.log(req.body)
    const newData= {
        dataName,
        dataInfo,
        dataYear,
    }
    const fincaAbajo= new Abajo(newData)
    await fincaAbajo.save()
    res.redirect("fincaAbajo")
}
export async function fincaAbajoFormView(req: Request, res:Response){
    res.render("abajo/addDataAbajo")
}
export async function fincaAbajoView(req: Request, res: Response){
    const fincaAbajo= await Abajo.find().sort({_id: -1}) //Mas nuevo primero
    res.render("abajo/fincaAbajo", {fincaAbajo})
}

//Finca Chica
export async function fincaChicaForm(req: Request, res: Response){
    const {dataName, dataInfo, dataYear}= req.body
    console.log(req.body)
    const newData= {
        dataName,
        dataInfo,
        dataYear,
    }
    const fincaChica= new Chica(newData)
    await fincaChica.save()
    res.redirect("fincaChica")
}
export async function fincaChicaFormView(req: Request, res:Response){
    res.render("chica/addDataChica")
}
export async function fincaChicaView(req: Request, res: Response){
    const fincaChica= await Chica.find().sort({_id: -1}) //Mas nuevo primero
    res.render("chica/fincaChica", {fincaChica})
}

//Finca del fondo
export async function fincaFondoForm(req: Request, res: Response){
    const {dataName, dataInfo, dataYear}= req.body
    console.log(req.body)
    const newData= {
        dataName,
        dataInfo,
        dataYear,
    }
    const fincaFondo= new Fondo(newData)
    await fincaFondo.save()
    res.redirect("fincaFondo")
}
export async function fincaFondoFormView(req: Request, res:Response){
    res.render("fondo/addDataFondo")
}
export async function fincaFondoView(req: Request, res: Response){
    const fincaFondo= await Fondo.find().sort({_id: -1}) //Mas nuevo primero
    res.render("fondo/fincaFondo", {fincaFondo})
}

//Calvaritos
export async function fincaCalvaritosForm(req: Request, res: Response){
    const {dataName, dataInfo, dataYear}= req.body
    console.log(req.body)
    const newData= {
        dataName,
        dataInfo,
        dataYear,
    }
    const fincaCalvaritos= new Calvaritos(newData)
    await fincaCalvaritos.save()
    res.redirect("fincaCalvaritos")
}
export async function fincaCalvaritosFormView(req: Request, res:Response){
    res.render("calvaritos/addDataCalvaritos")
}
export async function fincaCalvaritosView(req: Request, res: Response){
    const fincaCalvaritos= await Calvaritos.find().sort({_id: -1}) //Mas nuevo primero
    res.render("calvaritos/fincaCalvaritos", {fincaCalvaritos})
}

//Lluvias
export async function lluviasForm(req: Request, res: Response){
    const {dataQuantity, dataInfo, dataYear}= req.body
    console.log(req.body)
    const newData= {
        dataQuantity,
        dataInfo,
        dataYear,
    }
    const lluvias= new Lluvias(newData)
    await lluvias.save()
    res.redirect("lluvias")
}
export async function lluviasFormView(req: Request, res:Response){
    res.render("lluvias/addDataLluvias")
}
export async function lluviasView(req: Request, res: Response){
    const lluvias= await Lluvias.find().sort({_id: -1}) //Mas nuevo primero
    res.render("lluvias/lluvias", {lluvias})
}

//Riego
export async function riegoForm(req: Request, res: Response){
    const {dataQuantity, dataTime, dataYear, dataInfo}= req.body
    console.log(req.body)
    const newData= {
        dataQuantity,
        dataTime,
        dataYear,
        dataInfo
    }
    const riego= new Riego(newData)
    await riego.save()
    res.redirect("riego")
}
export async function riegoFormView(req: Request, res:Response){
    res.render("riego/addDataRiego")
}
export async function riegoView(req: Request, res: Response){
    const riego= await Riego.find().sort({_id: -1}) //Mas nuevo primero
    res.render("riego/riego", {riego})
}

//Tratamiento
export async function tratamientoForm(req: Request, res: Response){
    const {dataQuantity, dataYear, dataInfo, dataPlace}= req.body
    console.log(req.body)
    const newData= {
        dataQuantity,
        dataYear,
        dataInfo,
        dataPlace
    }
    const tratatamiento= new Tratamiento(newData)
    await tratatamiento.save()
    res.redirect("tratamiento")
}
export async function tratamientoFormView(req: Request, res:Response){
    res.render("tratamiento/addDataTratamiento")
}
export async function tratamientoView(req: Request, res: Response){
    const tratamiento= await Tratamiento.find().sort({_id: -1}) //Mas nuevo primero
    res.render("tratamiento/tratamiento", {tratamiento})
}