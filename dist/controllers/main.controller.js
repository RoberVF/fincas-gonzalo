"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fincaCalvaritosView = exports.fincaCalvaritosFormView = exports.fincaCalvaritosForm = exports.fincaFondoView = exports.fincaFondoFormView = exports.fincaFondoForm = exports.fincaChicaView = exports.fincaChicaFormView = exports.fincaChicaForm = exports.fincaAbajoView = exports.fincaAbajoFormView = exports.fincaAbajoForm = exports.fincaMedioView = exports.fincaMedioFormView = exports.fincaMedioForm = exports.mainPage = void 0;
const Medio_1 = __importDefault(require("../models/fincas/Medio"));
const Abajo_1 = __importDefault(require("../models/fincas/Abajo"));
const Chica_1 = __importDefault(require("../models/fincas/Chica"));
const Fondo_1 = __importDefault(require("../models/fincas/Fondo"));
const Calvaritos_1 = __importDefault(require("../models/fincas/Calvaritos"));
async function mainPage(req, res) {
    res.render("main");
}
exports.mainPage = mainPage;
// Finca del medio
async function fincaMedioForm(req, res) {
    const { dataName, dataYear, dataInfo } = req.body;
    console.log(req.body);
    const newData = {
        dataName,
        dataYear,
        dataInfo
    };
    const fincaMedio = new Medio_1.default(newData);
    await fincaMedio.save();
    res.redirect('fincaMedio');
}
exports.fincaMedioForm = fincaMedioForm;
async function fincaMedioFormView(req, res) {
    res.render("medio/addDataMedio");
}
exports.fincaMedioFormView = fincaMedioFormView;
async function fincaMedioView(req, res) {
    const fincaMedio = await Medio_1.default.find().sort({ _id: -1 }); //Mas nuevo primero
    res.render("medio/fincaMedio", { fincaMedio });
}
exports.fincaMedioView = fincaMedioView;
//Finca abajo
async function fincaAbajoForm(req, res) {
    const { dataName, dataInfo, dataYear } = req.body;
    console.log(req.body);
    const newData = {
        dataName,
        dataInfo,
        dataYear,
    };
    const fincaAbajo = new Abajo_1.default(newData);
    await fincaAbajo.save();
    res.redirect("fincaAbajo");
}
exports.fincaAbajoForm = fincaAbajoForm;
async function fincaAbajoFormView(req, res) {
    res.render("abajo/addDataAbajo");
}
exports.fincaAbajoFormView = fincaAbajoFormView;
async function fincaAbajoView(req, res) {
    const fincaAbajo = await Abajo_1.default.find().sort({ _id: -1 }); //Mas nuevo primero
    res.render("abajo/fincaAbajo", { fincaAbajo });
}
exports.fincaAbajoView = fincaAbajoView;
//Finca Chica
async function fincaChicaForm(req, res) {
    const { dataName, dataInfo, dataYear } = req.body;
    console.log(req.body);
    const newData = {
        dataName,
        dataInfo,
        dataYear,
    };
    const fincaChica = new Chica_1.default(newData);
    await fincaChica.save();
    res.redirect("fincaChica");
}
exports.fincaChicaForm = fincaChicaForm;
async function fincaChicaFormView(req, res) {
    res.render("chica/addDataChica");
}
exports.fincaChicaFormView = fincaChicaFormView;
async function fincaChicaView(req, res) {
    const fincaChica = await Chica_1.default.find().sort({ _id: -1 }); //Mas nuevo primero
    res.render("chica/fincaChica", { fincaChica });
}
exports.fincaChicaView = fincaChicaView;
//Finca del fondo
async function fincaFondoForm(req, res) {
    const { dataName, dataInfo, dataYear } = req.body;
    console.log(req.body);
    const newData = {
        dataName,
        dataInfo,
        dataYear,
    };
    const fincaFondo = new Fondo_1.default(newData);
    await fincaFondo.save();
    res.redirect("fincaFondo");
}
exports.fincaFondoForm = fincaFondoForm;
async function fincaFondoFormView(req, res) {
    res.render("fondo/addDataFondo");
}
exports.fincaFondoFormView = fincaFondoFormView;
async function fincaFondoView(req, res) {
    const fincaFondo = await Fondo_1.default.find().sort({ _id: -1 }); //Mas nuevo primero
    res.render("fondo/fincaFondo", { fincaFondo });
}
exports.fincaFondoView = fincaFondoView;
//Calvaritos
async function fincaCalvaritosForm(req, res) {
    const { dataName, dataInfo, dataYear } = req.body;
    console.log(req.body);
    const newData = {
        dataName,
        dataInfo,
        dataYear,
    };
    const fincaCalvaritos = new Calvaritos_1.default(newData);
    await fincaCalvaritos.save();
    res.redirect("fincaCalvaritos");
}
exports.fincaCalvaritosForm = fincaCalvaritosForm;
async function fincaCalvaritosFormView(req, res) {
    res.render("calvaritos/addDataCalvaritos");
}
exports.fincaCalvaritosFormView = fincaCalvaritosFormView;
async function fincaCalvaritosView(req, res) {
    const fincaCalvaritos = await Calvaritos_1.default.find().sort({ _id: -1 }); //Mas nuevo primero
    res.render("calvaritos/fincaCalvaritos", { fincaCalvaritos });
}
exports.fincaCalvaritosView = fincaCalvaritosView;
