import { Direccion} from './direccion';
import { Mail} from './mail';
import { Telefono} from './telefono';

export class Persona {
        nombre: string;
        apellidos: string;
        edad: number;
        DNI: string;
        cumple: string;
        color: string;
        sexo: "H" | "M" | "Otro";
        direccion: Direccion [];
        mail: Mail[];
        telf: Telefono[];
        notas: string;


    constructor(nuevoNombre:string, nuevoApellido:string, nuevaEdad: number, nuevoDNI:string, nuevoCumple:string, nuevoColor:string, nuevoSexo: "H" | "M" | "Otro", nuevoDirec:Direccion[], nuevoMail: Mail[], nuevoTelf: Telefono[], nuevoNotas: string){
        this.nombre =nuevoNombre;
        this.apellidos =nuevoApellido;
        this.edad =nuevaEdad;
        this.DNI=nuevoDNI;
        this.cumple=nuevoCumple;
        this.color =nuevoColor;
        this.sexo =nuevoSexo;
        this.direccion =[];
        this.mail=[];
        this.telf =[];
        this.notas =nuevoNotas;

    }

    addDireccion( nuevoCalle:string, nuevoNumero:number, nuevoPiso: number, nuevaLetra:string, nuevoCP:number, nuevoPoblacion:string, nuevoProvincia: string, nuevo: number,){
        this.direccion[nuevo] = new Direccion(nuevoCalle, nuevoNumero, nuevoPiso, nuevaLetra, nuevoCP, nuevoPoblacion, nuevoPoblacion);
    }

    addMail(nuevoTipo:string, nuevaDirec:string, nuevo: number){
        this.mail[nuevo] = new Mail (nuevoTipo, nuevaDirec);
    }

    addTelefono(nuevoTipo:string, nuevoNumero:number, nuevo: number){
        this.telf[nuevo] = new Telefono(nuevoTipo, nuevoNumero);
    }

    mostrarPersona(): void{
        console.log('');
        console.log(this.nombre, this.apellidos, '-', this.edad, this.sexo);
        console.log('DNI', this.DNI, 'Cumpleaños:', this.cumple, 'Color favorito:', this.color);
        console.log('Dirección:');
        for (let i in this.direccion) {
            console.log(i, "-", this.direccion[i].calle, ",",this.direccion[i].numero, ", Piso",this.direccion[i].piso, this.direccion[i].letra, "/",this.direccion[i].cp, this.direccion[i].poblacion,",", this.direccion[i].provincia);
        }
        console.log('Mail:');
        for (let i in this.mail) {
            console.log(i, "-", this.mail[i].tipo,":", this.mail[i].direccion);
        }
        console.log('Teléfono:');
        for (let i in this.telf) {
            console.log(i, "-", this.telf[i].tipo,":", this.telf[i].numero);
        }
        console.log('Otros datos:', this.notas);
    }

    nuevosDatos(a: string, b: string, c: number, d: number, e: string, f: number, g: string, h: string, i:number, j: string, k: string, l:number, m: string, n: number, o:number): void {
        if (a == this.DNI){
            console.log('El DNI introducido pertenece a', this.nombre, this.apellidos);
        } else {
            console.log('El DNI introducido no corresponde con a', this.nombre, this.apellidos);
            this.addDireccion(b,c,d,e,f,g,h,i);
            this.addMail(j, k, l);
            this.addTelefono(m, n, o);
        }
    }
}