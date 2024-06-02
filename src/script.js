// # 2️⃣ Calculadora de partidas Rankeadas

let rankeds = rankCalculator(45, 13)

console.log(`The hero has a balance of ${rankeds[0]} is at rank ${rankeds[1]}`);


function rankCalculator(victories, loses) {
    let victoryBalance = victories - loses;
    let rank = "";

    if (victoryBalance <= 10) {
    rank = "Iron"
  }

    else if (victoryBalance >= 11 && victoryBalance <= 20) {
    rank = "Bronze"
  }

    else if (victoryBalance >= 21 && victoryBalance <= 50) {
    rank = "Silver"
  }

    else if (victoryBalance >= 51 && victoryBalance <= 80) {
    rank = "Gold"
  }

    else if (victoryBalance >= 81 && victoryBalance <= 90) {
    rank = "Diamond"
  }

    else if (victoryBalance >= 91 && victoryBalance <= 100) {
    rank = "Legendary"
  }

    else if (victoryBalance >= 101) {
    rank = "Imortal"
  }

  return [victoryBalance, rank];

}