const funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

//A diferença é que o let pegou da memoria
//o valor 2 e 8 do array;;;A função tem uma consciencia do local que ela foi definida.
//e o var pegou o 10 que é um final do loop, que quando da falso sai do bloco