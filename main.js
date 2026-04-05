/* 
Vítejte na mém projektu: Kalkulačka pro převod dekadických čísel na binární.

Jak program spustit:
1. Otevřete terminál / konzoli.
2. Zadejte příkaz: node domaci_ukol.js nebo npm start (pokud máte nastaveno v package.json) a stiskněte Enter.
3. Stiskněte Enter.

Jak program funguje:
- Program vás vyzve k zadání dekadického (desítkového) čísla.
- Po zadání čísla a potvrzení klávesou Enter se číslo převede na binární tvar.
- Výsledek se zobrazí v konzoli.

Ošetření chyb:
- Pokud zadáte neplatný vstup (např. text), program vás upozorní, že se nejedná o číslo.
- Pokud zadáte záporné číslo, program vás vyzve k zadání kladného čísla.

Užijte si používání této jednoduché kalkulačky!
*/

console.log("Program se spouští...");

function decToBin(number) {
  if (number === 0) return "0";
  if (number < 0) return "Zadej kladné číslo!";

  let binary = "";

  while (number > 0) {
    let remainder = number % 2;
    binary = remainder + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}

module.exports = { decToBin };

if (require.main === module) {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Zadej dekadické číslo: ", (input) => {
    let number = parseInt(input);

    if (isNaN(number)) {
      console.log("To není číslo!");
    } else {
      console.log("Binární číslo:", decToBin(number));
    }

    rl.close();
  });
}
