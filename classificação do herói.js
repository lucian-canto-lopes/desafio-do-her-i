
let Nome = prompt("digite o Nome do herói:");
let XP = parseFloat(prompt("digite o xp"));

let NivelDoHeroi;
if (XP <= 1.000){
  NivelDoHeroi = "ferro";
}
else if (1.001 <= XP && XP <= 2.000){
  NivelDoHeroi = "Bronze";
}
else if (2.001<= XP && XP <= 5.000){
  NivelDoHeroi = "Bronze";
}
else if (5.001<= XP && XP <= 7.000){
  NivelDoHeroi = "Ouro";
}
else if (7.001<= XP && XP <= 8.000){
  NivelDoHeroi = "Platina";
}
else if (8.001<= XP && XP <= 9.000){
  NivelDoHeroi = "Ascendente";
}
else if (9.001<= XP && XP <= 10.000){
  NivelDoHeroi = "Imortal";
}
else{
  NivelDoHeroi = "Radiante";
}
console.log("O Herói de nome "+ Nome + " está no nível de " + NivelDoHeroi);