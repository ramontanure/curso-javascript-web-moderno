console.log(Math.ceil(6.1)) //ceil serve para arredontar para cima
//Math é um object no javascript então Math.ceil acessa uma função definida dentro do objeto

const obj1 = {}
obj1.nome = 'Bola',
obj1.quantidade = 6,
obj1.jogo = 2,
//obj1['nome'] = 'Bola2' //Para acessar atributo de um objeto e modificar
console.log(obj1)

function Obj (nome){
    this.nome = nome
    this.exec = function(){ //This serve para deixar a palavra nome publica para fora ao contrario se fosse criar uma variavel var
        console.log('Exec....')
    }
}
const obj2 = new Obj('Cadeira') //Aqui a variavel obj2 ta recebendo um novo Obj ('Cadeira') Levando até a funçao
const obj3 = new Obj('Mesa')
console.log(obj2.nome) //Com o ponto o obj2 ta acessando um atributo da função la em cima
console.log(obj3.nome)
obj3.exec()
