"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_controller_1 = require("../controllers/main.controller");
const router = express_1.Router();
// router.route('/').get((req: Request, res: Response)=> {
//     res.render("main")
// })
router.route('/')
    .get(main_controller_1.mainPage);
// router.route('/add')
//     .post(addFinca)
//     .get(addFincaView)
router.route('/addFincaMedio')
    .post(main_controller_1.fincaMedioForm)
    .get(main_controller_1.fincaMedioFormView);
router.route('/fincaMedio')
    .get(main_controller_1.fincaMedioView);
router.route('/addFincaAbajo')
    .post(main_controller_1.fincaAbajoForm)
    .get(main_controller_1.fincaAbajoFormView);
router.route('/fincaAbajo')
    .get(main_controller_1.fincaAbajoView);
router.route('/addFincaChica')
    .post(main_controller_1.fincaChicaForm)
    .get(main_controller_1.fincaChicaFormView);
router.route('/fincaChica')
    .get(main_controller_1.fincaChicaView);
router.route('/addFincaFondo')
    .post(main_controller_1.fincaFondoForm)
    .get(main_controller_1.fincaFondoFormView);
router.route('/fincaFondo')
    .get(main_controller_1.fincaFondoView);
router.route('/addFincaCalvaritos')
    .post(main_controller_1.fincaCalvaritosForm)
    .get(main_controller_1.fincaCalvaritosFormView);
router.route('/fincaCalvaritos')
    .get(main_controller_1.fincaCalvaritosView);
router.route('/addLluvias')
    .post(main_controller_1.lluviasForm)
    .get(main_controller_1.lluviasFormView);
router.route('/lluvias')
    .get(main_controller_1.lluviasView);
router.route('/addRiego')
    .post(main_controller_1.riegoForm)
    .get(main_controller_1.riegoFormView);
router.route('/riego')
    .get(main_controller_1.riegoView);
module.exports = router;
