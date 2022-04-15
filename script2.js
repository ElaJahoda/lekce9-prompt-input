// Vytvoř si sčítač dvou čísel.
// - Nech uživatele zadat dvě celá čísla do dvou vstupů pro číslo.
// - Poté, co obě vyplní, vypiš výsledek do HTML.
// - Interně můžeš použít funkci z Lekce 1: https://github.com/Czechitas-JavaScript-1/lekce1-funkce-udalosti/blob/main/main.js
// - Minibonus: Pokud chceš, můžeš rozšířit na odečítání, násobení i dělení (jak budeš mezi operacemi přepínat?).

let tlacitko = document.querySelector('button');

function scitani(cislo1, cislo2, znamenko) {
    let c = 0;
    if(znamenko === '+') {
        c = cislo1 + cislo2;
    } else if(znamenko === '-') {
        c = cislo1 - cislo2;
    } else if(znamenko === '/' && znamenko !== 0) {
        c = cislo1 / cislo2;
    } else if(znamenko === '*') {
        c = cislo1 * cislo2;
    }
    return c;
}

tlacitko.addEventListener('click',() => {
let vysledek = document.querySelector('#vysledek > span');
let cislo1 = parseInt(document.querySelector('input[name=cislo1]').value);
let cislo2 = parseInt(document.querySelector('input[name=cislo2]').value);
let znamenko = vybraneZnamenko();
if(znamenko != null && cislo1 != NaN && cislo2 != NaN) {
vysledek.innerHTML = scitani(cislo1, cislo2, znamenko);
}else{
    vysledek.innerHTML = 'Neni zadan cely priklad. Doplnte znak pro matematickou operaci, jedno nebo druhe cislo a opakujte akci.';
}} )

function vybraneZnamenko() { 
    let znamenko = document.querySelector('input[name="znamenko"]:checked');
    if(znamenko != null) {
        return(znamenko.value);
    }
    else {
        return null;
    }
}