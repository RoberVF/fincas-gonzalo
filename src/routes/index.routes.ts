import {Router, Request, Response} from 'express'
import { mainPage, fincaMedioForm, fincaMedioFormView, fincaMedioView, fincaAbajoForm, fincaAbajoFormView, fincaAbajoView, fincaChicaForm, fincaChicaFormView, fincaChicaView, fincaFondoForm, fincaFondoFormView, fincaFondoView, fincaCalvaritosForm, fincaCalvaritosFormView, fincaCalvaritosView, lluviasForm, lluviasFormView, lluviasView } from '../controllers/main.controller'
const router= Router()

// router.route('/').get((req: Request, res: Response)=> {
//     res.render("main")
// })

router.route('/')
    .get(mainPage)

// router.route('/add')
//     .post(addFinca)
//     .get(addFincaView)

router.route('/addFincaMedio')
    .post(fincaMedioForm)
    .get(fincaMedioFormView)
router.route('/fincaMedio')
    .get(fincaMedioView)

router.route('/addFincaAbajo')
    .post(fincaAbajoForm)
    .get(fincaAbajoFormView)
router.route('/fincaAbajo')
    .get(fincaAbajoView)

router.route('/addFincaChica')
    .post(fincaChicaForm)
    .get(fincaChicaFormView)
router.route('/fincaChica')
    .get(fincaChicaView)

router.route('/addFincaFondo')
    .post(fincaFondoForm)
    .get(fincaFondoFormView)
router.route('/fincaFondo')
    .get(fincaFondoView)

router.route('/addFincaCalvaritos')
    .post(fincaCalvaritosForm)
    .get(fincaCalvaritosFormView)
router.route('/fincaCalvaritos')
    .get(fincaCalvaritosView)

router.route('/addLluvias')
    .post(lluviasForm)
    .get(lluviasFormView)
router.route('/lluvias')
    .get(lluviasView)



module.exports= router
