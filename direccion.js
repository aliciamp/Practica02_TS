"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(nuevoCalle, nuevoNumero, nuevoPiso, nuevaLetra, nuevoCP, nuevoPoblacion, nuevoProvincia) {
        this.calle = nuevoCalle;
        this.numero = nuevoNumero;
        this.piso = nuevoPiso;
        this.letra = nuevaLetra;
        this.cp = nuevoCP;
        this.poblacion = nuevoPoblacion;
        this.provincia = nuevoProvincia;
    }
    Direccion.prototype.mostrarDireccion = function () {
        console.log(this.calle, this.numero, this.piso, this.letra);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
