"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    function Persona(nuevoNombre, nuevoApellido, nuevaEdad, nuevoDNI, nuevoCumple, nuevoColor, nuevoSexo, nuevoDirec, nuevoMail, nuevoTelf, nuevoNotas) {
        this.nombre = nuevoNombre;
        this.apellidos = nuevoApellido;
        this.edad = nuevaEdad;
        this.DNI = nuevoDNI;
        this.cumple = nuevoCumple;
        this.color = nuevoColor;
        this.sexo = nuevoSexo;
        this.direccion = [];
        this.mail = [];
        this.telf = [];
        this.notas = nuevoNotas;
    }
    Persona.prototype.addDireccion = function (nuevoCalle, nuevoNumero, nuevoPiso, nuevaLetra, nuevoCP, nuevoPoblacion, nuevoProvincia, nuevo) {
        this.direccion[nuevo] = new direccion_1.Direccion(nuevoCalle, nuevoNumero, nuevoPiso, nuevaLetra, nuevoCP, nuevoPoblacion, nuevoPoblacion);
    };
    Persona.prototype.addMail = function (nuevoTipo, nuevaDirec, nuevo) {
        this.mail[nuevo] = new mail_1.Mail(nuevoTipo, nuevaDirec);
    };
    Persona.prototype.addTelefono = function (nuevoTipo, nuevoNumero, nuevo) {
        this.telf[nuevo] = new telefono_1.Telefono(nuevoTipo, nuevoNumero);
    };
    Persona.prototype.mostrarPersona = function () {
        console.log('');
        console.log(this.nombre, this.apellidos, '-', this.edad, this.sexo);
        console.log('DNI', this.DNI, 'Cumpleaños:', this.cumple, 'Color favorito:', this.color);
        console.log('Dirección:');
        for (var i in this.direccion) {
            console.log(i, "-", this.direccion[i].calle, ",", this.direccion[i].numero, ", Piso", this.direccion[i].piso, this.direccion[i].letra, "/", this.direccion[i].cp, this.direccion[i].poblacion, ",", this.direccion[i].provincia);
        }
        console.log('Mail:');
        for (var i in this.mail) {
            console.log(i, "-", this.mail[i].tipo, ":", this.mail[i].direccion);
        }
        console.log('Teléfono:');
        for (var i in this.telf) {
            console.log(i, "-", this.telf[i].tipo, ":", this.telf[i].numero);
        }
        console.log('Otros datos:', this.notas);
    };
    Persona.prototype.nuevosDatos = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        if (a == this.DNI) {
            console.log('El DNI introducido pertenece a', this.nombre, this.apellidos);
        }
        else {
            console.log('El DNI introducido no corresponde con a', this.nombre, this.apellidos);
            this.addDireccion(b, c, d, e, f, g, h, i);
            this.addMail(j, k, l);
            this.addTelefono(m, n, o);
        }
    };
    return Persona;
}());
exports.Persona = Persona;
