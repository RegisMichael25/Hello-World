// class formaDeBolo{
//     constructor(saborDaMassa, saborRecheio){
//         this.saborDaMassa = saborDaMassa
//         this.saborRecheio = saborRecheio
//     }
//     escrever(){
//         console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
//     }

//     assar(){
//         console.log(`Assando um bolo de ${this.saborDaMassa}`)
//     }

//     recheio(){
//         console.log("Reecheio dee " + this.saborRecheio)
//     }
// }


// let boloFesta = new formaDeBolo("chocolate", "nutela")
// let boloPremium = new formaDeBolo('baunilha', 'coco')
// let boloDaMamae = new formaDeBolo('morango', 'baunilha')


// boloDaMamae.assar()
// boloFesta.assar()
// boloPremium.assar()

// boloDaMamae.recheio()


class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        // = {
        //     'mago': {
        //         ataque: 'magia'
        //     },
        //     'guerreiro': {
        //         ataque: 'espada'
        //     },
        //     'monge': {
        //         ataque: 'artes marciais'
        //     },
        //     'ninja': {
        //         ataque: 'shuriken'
        //     }
        // }
    }

    

    atacar(){
        let ataque;

        if (this.tipo == 'mago') {
            ataque = 'magia'
            return console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo == 'guerreiro') {
            ataque = 'espada'
            return console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo == 'monge') {
            ataque = 'artes marciais'
            return console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else if (this.tipo == 'ninja') {
            ataque = 'shuriken'
            return console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
        else {        
            return console.log(`Heroi não criado`);
        }
    }
}

let heroMago = new Hero('Regis', 21, 'cavaleiro')

heroMago.atacar()