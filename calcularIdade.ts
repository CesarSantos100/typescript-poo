 interface IcalcularIdade{
    nome: string,
    anoNascimento:number
    profissao?: string

 }

//function calcularIdade(nome: string, anoNascimento: number) {
  //  const idade: number = 2022 - anoNascimento
    //return `Seu nome é ${nome}. Você tem ${idade} anos`
//}

//console.log(calcularIdade('Cesar', 1994));


function calcularIdade({
    nome,
    anoNascimento,
    profissao
}: IcalcularIdade): string {
    const idade: number = 2022 - anoNascimento

    if(profissao) {
        return `Seu nome é ${nome}. Você tem ${idade} anos e sua profissão é ${profissao}`
    }

    return `Seu nome é ${nome}. Você tem ${idade} anos.`
}


const nome =  'Cesar Santos'
const anoNascimento = 1994
const profissao = 'Desenvolvedor'


console.log(calcularIdade({nome, anoNascimento}))
console.log(calcularIdade({nome, anoNascimento, profissao}))
    




