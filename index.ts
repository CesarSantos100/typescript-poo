interface IConta {
    nomeTitular: string;
    saldo?: number
}

class Conta {
    private nomeTitular: string
    private saldo: number
    private ativa: boolean = true
    
    constructor( {
        nomeTitular,
        saldo = 0
    }: IConta){
        this.nomeTitular = nomeTitular,
        this.saldo = saldo
        console.log(`Bem vindo ao DIO Bank, ${nomeTitular}`)
    }
    
    meuSaldo = (): number => this.saldo
    
    depositar = (valor: number): void | boolean => {
        if(!this.ativa) {
            console.log('Conta desativada, impossível realizar depósito')
            return this.ativa
        }
        this.saldo += valor
        console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
    }

    sacar = (valor: number): boolean => {
        if(this.ativa) {
            console.log('Conta desativada, impossível realizar saque')
            return this.ativa
        }
        if(valor <= this.saldo) {
            this.saldo -=valor
            console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`)
            return this.ativa
        }
        console.log(`Saldo insuficiente. Você quer sacar ${valor} .Seu saldo atual é ${this.saldo}`)
        return this.ativa
    } 

    cancelarConta = () => {
        if(this.saldo == 0){
            this.ativa = false
            console.log('Conta desativada')
            return this.ativa
        }
        console.log(`Impossível desativar conta de ${this.nomeTitular}. Conta com pendência!`)
    }

}

const conta: Conta = new Conta({nomeTitular: 'Cesar'})
//const contaB: Conta = new Conta({nomeTitular: 'Pedro', saldo: 10})

//console.log('Antes do deposito',contaA.meuSaldo())
//conta.cancelarConta()
conta.depositar(100)
//console.log(conta)

//console.log(contaA.meuSaldo)
//console.log('Depois do deposito',contaA.meuSaldo())


//console.log(contaB)



// vamos criar o dioBank
//Criar uma conta
//Depositar na conta
//Sacar da conta
//Encerrar a conta


