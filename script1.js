//sekvence promptu
let sirka = parseInt(prompt('Šířka pračky v cm: '));
let vyska = parseInt(prompt('Výška pračky v cm: '));
let hloubka = parseInt(prompt('Hloubku pračky v cm: '));

console.log(sirka);
console.log(vyska);
console.log(hloubka);

let sirkaProstoru = 62;
let vyskaProstoru = 70;
let hloubkaProstoru = 80;

 if(sirka <= sirkaProstoru && vyska <= vyskaProstoru && hloubka <= hloubkaProstoru) {
    alert('Vejde se. Kup pračku!')
} else {
    alert('Nevejde.')
}
