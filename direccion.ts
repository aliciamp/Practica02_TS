export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    cp: number;
    poblacion: string;
    provincia: string;


    constructor(nuevoCalle:string, nuevoNumero:number, nuevoPiso: number, nuevaLetra:string, nuevoCP:number, nuevoPoblacion:string, nuevoProvincia: string){
        this.calle =nuevoCalle;
        this.numero =nuevoNumero;
        this.piso =nuevoPiso;
        this.letra=nuevaLetra;
        this.cp=nuevoCP;
        this.poblacion =nuevoPoblacion;
        this.provincia =nuevoProvincia;
    }

    mostrarDireccion(): void{
        console.log(this.calle, this.numero, this.piso, this.letra);
    }
}