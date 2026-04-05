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

/* Načtení modulu pro práci se vstupem z konzole */
const readline = require("readline");

/* Vytvoření rozhraní pro čtení a zápis v konzoli */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* 
Funkce pro převod dekadického čísla na binární:
- Pokud je číslo 0, vrací "0"
- Pokud je číslo záporné, vrací chybovou hlášku
- Jinak provádí převod pomocí dělení dvěma
*/
export function decToBin(number) {
  if (number === 0) return "0";
  if (number < 0) return "Zadej kladné číslo!";

  let binary = "";

  /* Opakované dělení čísla dvěma a skládání zbytku */
  while (number > 0) {
    let remainder = number % 2;
    binary = remainder + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}

/* 
Dotaz na uživatele:
- Načte vstup z konzole
- Pokusí se ho převést na číslo
- Zkontroluje platnost vstupu
*/
rl.question("Zadej dekadické číslo: ", (input) => {
  let number = parseInt(input);

  /* Kontrola, zda je vstup číslo */
  if (isNaN(number)) {
    console.log("To není číslo!");
  } else {
    /* Výpis převedeného binárního čísla */
    console.log("Binární číslo:", decToBin(number));
  }

  /* Ukončení rozhraní */
  rl.close();
});
