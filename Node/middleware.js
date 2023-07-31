//Mais usado dentro do node middleware pattern(chain of responsability) cadeiade resposabilidade
const passo1 = (ctx, next) => {
  //ctx é um objeto, next é uma função, quando chamada dispara o proximo passo na cadeia
  ctx.valor1 = "mid1";
  next();
};
//Primeiro parametro é o contexto é um objeto que vai sendo passado de um passo pra outro
//Ele é importante por que é o objeto que carrega os dados de um passo pra outros

const passo2 = (ctx, next) => {
  ctx.valor2 = "mid2";
  next();
};

const passo3 = (ctx) => (ctx.valor3 = "mid3");

const exec = (ctx, ...middlewares) => {
  const execPasso = (indice) => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);

  //Operador rest
};

const ctx = {};
exec(ctx, passo1, passo2, passo3);

console.log(ctx);
