while (true){
console.log("seja bem vindo, jogador!");
let vitorias = prompt("digite a quantidade de vitórias:");
let derrotas = prompt("digite a quantidade de derrotas:");
let resultado = vitorias - derrotas;
let nivel = "negativo";
if(resultado <= 10){
    nivel = "Ferro";
}
if(resultado > 10 && resultado <= 20){
    nivel = "Bronze";
}
if(resultado > 20 && resultado <= 50){
    nivel = "Prata";
}
if(resultado > 50 && resultado <= 80){
    nivel = "Ouro";
}
if(resultado > 80 && resultado <= 90){
    nivel = "Diamante";
}
if(resultado > 90 && resultado <= 100){
    nivel = "Lendário";
}
if(resultado > 100){
    nivel = "Imortal";
}

console.log(`O Herói tem de saldo de ${resultado} está no nível de ${nivel}`);
let encerrar = prompt("fazer outro calculo? (s/n)");
if(encerrar == "n"){
    break;
}
else{
    continue
}


}

