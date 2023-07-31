const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
//Pelo fato que var não tem escopo o var
//da esse erro de escopo de função