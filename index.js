let nomeJogador = "Felipe"
let quantXp = 7030
let nivelExperiencia = ""

if (quantXp <= 1000) {
  nivelExperiencia = "Ferro"
} else if ((quantXp >= 1001) && (quantXp <= 2000)){
  nivelExperiencia = "Bronze"
} else if ((quantXp >= 2001) && (quantXp <= 5000)){
  nivelExperiencia = "Prata"
} else if ((quantXp >= 5001) && (quantXp <= 7000)){
  nivelExperiencia = "Ouro"
} else if ((quantXp >= 7001) && (quantXp <= 8000)){
  nivelExperiencia = "Platina"
} else if ((quantXp >= 8001) && (quantXp <= 9000)){
  nivelExperiencia = "Ascendente"
} else if ((quantXp >= 9001) && (quantXp <= 10000)){
  nivelExperiencia = "Imortal"
} else if (quantXp >= 10001){
  nivelExperiencia = "Radiante"
}
console.log("O Herói de nome "+ nomeJogador + " está no nível de " + nivelExperiencia)