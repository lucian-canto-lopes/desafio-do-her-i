
let XP = prompt("digite o xp");
let NivelDoHeroi;
if (XP <= 1.000){
  NivelDoHeroi = "ferro"
};
if (1.001 <= XP && XP < 2.000){
  NivelDoHeroi = "Bronze"
};
if (2.001<= XP && XP < 5.000){
  NivelDoHeroi = "Bronze"
};
if (5.001<= XP && XP < 7.000){
  NivelDoHeroi = "Ouro"
};
if (7.001<= XP && XP < 8.000){
  NivelDoHeroi = "Platina"
};
if (8.001<= XP && XP < 9.000){
  NivelDoHeroi = "Ascendente"
};
if (9.001<= XP && XP < 10.000){
  NivelDoHeroi = "Imortal"
};
if (XP >= 10.001){
  NivelDoHeroi = "Radiante"
};
console.log("o nivel do heroi é: " + NivelDoHeroi);