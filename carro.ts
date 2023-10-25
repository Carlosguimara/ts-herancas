import { Veiculo } from "./veiculo";

export class carro extends Veiculo {
    portas: number
    rodas: number
    buzina: string
    modelo: string
    constructor (portas:number, rodas:number, buzina:string, modelo: string) {
        super()
        this.portas = portas
        this.rodas = rodas
        this.buzina = buzina
        this.modelo = modelo
    }
    buzinar(){
        console.log(`Este é o som da buzina do ${this.modelo} : "${this.buzina}"`)
    }
    apresentar() {
        console.log(`Este é um ${this.modelo} com ${this.portas} portas e ${this.rodas} rodas`)
    }
}