
let  banco = {
    nome: "Itau",
    agencia: "0660",
    conta: "0066-7",
    tipoConta: "Corrente",
    saldo: 1880.00,

    numeroConta: function(){
        console.log(banco.conta)
    },

    buscarSaldo: function(){
        console.log(banco.saldo)
    },

    depositar: function(deposito){
        this.saldo += deposito
    },

    sacar: function(saque){
       this.saldo -= saque
    },

}

console.log("Tipo de conta:", banco.tipoConta)
console.log("Banco:", banco.nome)
console.log("Número da agência:", banco.agencia)
console.log("Número da conta:", banco.conta)
console.log("Saldo da conta:", banco.saldo)
banco.depositar(200)
console.log("O saldo depois do deposito: R$", banco.saldo)
banco.sacar(50)
console.log("O saldo depois do saque: R$", banco.saldo)