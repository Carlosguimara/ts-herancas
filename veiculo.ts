export class Veiculo {
    movimentando: boolean = false
    movimentar(): boolean {
        console.log('comando acelerar acionado- Ele está se movimentando')
        this.movimentando = true
        return this.movimentando
    }
    parar(): void {
        if (this.movimentando) {
            console.log('comando Parar acionado - Ele parou')
            this.movimentando = false
        } else {
            console.log('comando Parar acionado - Ele já estava parado')
        }
        }
    }
