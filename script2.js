// Vytvoř si sčítač dvou čísel.
// - Nech uživatele zadat dvě celá čísla do dvou vstupů pro číslo.
// - Poté, co obě vyplní, vypiš výsledek do HTML.
// - Interně můžeš použít funkci z Lekce 1: https://github.com/Czechitas-JavaScript-1/lekce1-funkce-udalosti/blob/main/main.js
// - Minibonus: Pokud chceš, můžeš rozšířit na odečítání, násobení i dělení (jak budeš mezi operacemi přepínat?).

let vysledek = document.querySelector('#vysledek > span');
let tlacitko = document.querySelector('button');

function scitani(cislo1, cislo2) {
    let c = cislo1 + cislo2;
    return c;
}

tlacitko.addEventListener('click',() => {
let cislo1 = parseInt(document.querySelector('input[name=cislo1]').value);
let cislo2 = parseInt(document.querySelector('input[name=cislo2]').value);
console.log(cislo1);
console.log(cislo2);
console.log(scitani(cislo1, cislo2));
vysledek.innerHTML = scitani(cislo1, cislo2);
})