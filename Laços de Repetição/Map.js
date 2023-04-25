const valores = [1,2,3,4,5,6,7,8,9,10];
const resultado = valores.map((value)=>{
    console.log(`${value} x 10 = ${value * 10}`);
    return value * 5
});

console.log(resultado);