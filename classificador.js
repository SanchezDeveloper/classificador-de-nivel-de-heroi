function classificadorDeNivel (name, xp) {
  if(typeof xp !== "mumber" || Number.isNaN(xp)) {
    throw new Error("XP tem que ser um numero e inteiro")
  }
  if(xp < 0) {
    throw new Error("XP não pode ser negativo")
  }


  let rank;
  if (xp < 1001) {
    rank = "Ferro";
  } else if (xp < 2001) {
    rank = "Bronze";
  } else if (xp < 5001) {
    rank = "Prata";
  } else if (xp < 7001) {
    rank = "Ouro";
  } else if (xp < 8001) {
    rank = "Platina";
  } else if (xp < 9001) {
    rank = "Ascendente";
  } else if (xp < 10001) {
    rank = "Imortal";
  } else if ( xp >= 10001) {
    rank = "Radiante";
  }

  console.log(`O Herói de nome: ${name} está no nível ${rank}`)
}

classificadorDeNivel("Robertinho_PRO_PLAYER", 1238);