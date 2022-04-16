// - Nech uživatele zadat jeho rodné číslo.
// - Proveď validaci, zda se jedná o rodné číslo (převzato z webu Ministerstva vnitra ČR):
//     - Rodné číslo je desetimístné číslo, které je dělitelné jedenácti beze zbytku; 
//     první dvojčíslí vyjadřuje poslední dvě číslice roku narození, 
//     druhé dvojčíslí vyjadřuje měsíc narození, u žen zvýšené o 50, třetí dvojčíslí 
//     vyjadřuje den narození; čtyřmístná koncovka je rozlišujícím znakem fyzických 
//     osob narozených v tomtéž kalendářním dnu.
//     - Rodná čísla přidělená fyzickým osobám narozeným před 1. 1. 1954 mají stejnou 
//     strukturu, jsou však devítimístná s třímístnou koncovkou a nesplňují podmínku dělitelnosti jedenácti.

let rodneCislo = document.querySelector('input');
let vysledek = document.querySelector('#vysledek');

rodneCislo.addEventListener('change', validace);

function validace(){
    let hodnota = rodneCislo.value;
    let output = [];
    let year = parseInt(hodnota.substring(0,2));
    let month = parseInt(hodnota.substring(2,4));
    let day = parseInt(hodnota.substring(4,6));
    let ext = parseInt(hodnota.substring(6,10));

    for (var i = 0, len = hodnota.length; i < len; i += 1) {
        output.push(+hodnota.charAt(i));
    }
    console.log(output);
    if(output.length === 10 && kontrolaDelitelnosti(output) || (output.length === 9 && year < 54 && day <= 31 && month <= 62)) {
        vysledek.textContent = 'Jedna se o rodne cislo.';
        datumNarozeni(hodnota, year, month, day);
    }else {
        vysledek.textContent = 'Nejedna se o rodne cislo.'
    }
}

function kontrolaDelitelnosti(o) {
    let l = o.length;
    let evenCislo = 0;
    let oddCislo = 0;
    //vypocitat hodnotu sudych a lichych cisel  || output.length === 9 && parseInt(hodnota.substring(0,2)) < 54
    for (let i = 0; i < l; i++) {
        if (i % 2 == 0) { //znamena 'pokud jsem sudy', opacne pro licha by to bylo (i % 2 != 0);
            oddCislo += (o[i] - '0');
        } else {
            evenCislo += (o[i] - '0');
        }
    }
    return ((oddCislo - evenCislo) % 11 == 0) // % je modulus operator - urcuje jaky je zbytek po deleni
}

function datumNarozeni(hodnota, year, month, day) {
    month -= (month > 12) ? 50 : 0; //ternarni operator
    year += (hodnota.length == 10 && year < 54) ? 2000 : 1900;
    vysledek.textContent += ' Datum narozeni je: ' + day + '. ' + month + '. ' + year;
}

//x = output
// if(x.length < 9) throw 1;

// if((x.length == 9) && (year < 54)) return true;

// var d = new Date();
//
// if(month == 0) throw 1;
// if(month > 12) throw 1;
// if(day == 0) throw 1;
// if(day > 31) throw 1;
