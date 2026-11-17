//Const = konstant, fast värde, obs: variabeln kan inte ändras
/* const myName: string = 'John Doe'
const kafeNamn: string = 'Kaffebaren'
const meny: string[] = ['Kaffe', 'Latte']
meny.push('Kanelbulle')
console.log(kafeNamn, meny)
 */

//Let: tilldelas om
/* let antalGaster: number = 0
antalGaster = 5
antalGaster++
console.log(antalGaster)
 */

// VAR, undvik, gammal variant
/* var gammal: string = 'första'
var gammal: string = 'andra'

if (true) {
    var lacker: string = 'syns utanför IF'
    let stannar: string = 'syns bara här inne'
}
console.log(lacker)
 */

//Loop med tid
/* for (var vi = 0; vi < 3; vi++) {
    setTimeout(() => console.log('VAR', vi))
}
 */
//Loop med tid och med LET
/* for (let li = 0; li < 3; li++) {
    setTimeout(() => console.log('LET', li))
} */

/* Namngivning */
//camelCase, beskrivande namn, antalGaster , antal_gaster

/* Viktigt att vi tänker på i vilka fall ska en variabel ändras? */
/* const kafeNamn: string = 'Kafe Richard'
const moms: number = 0.12 //Matmoms är 12%, ändras aldrig
let antalGaster: number = 0 //Förändras under dagen = LET
let intakt: number = 0 //Förändras under dagen = LET

antalGaster++
intakt = intakt + 35 //Betalar en kaffe
antalGaster += 1 //antalGaster = antalGaster + 1
intakt += 42 //nästa gäst köper en latte för 42 spänn

console.log(`${kafeNamn}: ${antalGaster} Gäster, ${intakt} kr`)
 */
/* Datatyper */
//Primitiva typer
/* const text: string = 'Kaffe' //String
const heltal: number = 24 // Heltal
const decimal: number = 3.5 //Decimaltal
const sant: boolean = true //Booleans
const tomt: null = null //medvetet tomt
const saknas: undefined = undefined //variabel är inte tilldelad
console.log(typeof text) //Koll av datatyp med typeof
 */
//Sammansatta typer
/* const lista: number[] = [1, 2, 3]
const objekt: { namn: string } = {
    namn: 'Hejsan va kul vi har och alla är vakna'
}
console.log(lista[[]])
 */

//Typescripts union, literal, any
/* let idnummer: string | number = 'hej' //Union
let storlek: 'liten' | 'stor' = 'liten' //Literal, bara dessa värden är tillåtna
let vad: any = "5"; //Type Any = går bra med vadsomhelst
 */
// --- Omvandla mellan typer ---
/*   console.log(Number("42") + 1); // 43: text → tal
  console.log(String(42) + 1); // "421": tal → text
  console.log(parseInt("35 kr")); // 35: läser tal ur text
  console.log(Number("abc")); // NaN = "Not a Number"
  console.log("5" + 3); // GISSA: "53" – + mellan text och tal klistrar ihop
  console.log(Number("5") * 3); // 15 */

/*    // --- Sant eller falskt? (truthy / falsy) ---
  console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN)); // alla false = "falsy"
  console.log(Boolean("0"), Boolean(" "), Boolean([])); // alla true (!) – det mesta annat är "truthy"
 */

//const produkt: string = '  kaffe latte ' // text med mellanslag
/*   console.log(produkt.trim()); // "kaffe latte" – trim tar bort mellanslag
  console.log(produkt.trim().toUpperCase()); // "KAFFE LATTE"
  console.log(produkt.trim().length); // 11 – antal tecken
  console.log(produkt.includes("latte")); // true – innehåller texten?
  console.log(produkt.trim().slice(0, 5)); // "kaffe" – del av texten */
/*
  const pris: number = 34.5;
  console.log(pris.toFixed(2)); // "34.50" – OBS: blir text!
  console.log(Math.round(pris), Math.floor(pris), Math.ceil(pris)); // 35 34 35: avrunda, nedåt, uppåt
  const prisMedMoms: number = pris * 1.12; // 38,64
  console.log(`${prisMedMoms.toFixed(2)}`); // text + tal i en mening
  */

/* let test = 12.3
console.log(test.toLocaleString('sv-SE')) */ //Gör om decimaltal (punkt till ,)

/* Operatorer och villkor */
/* const a: number = 5
const b: number = 3
const timme: number = 10

// --- Jämförelser (ger true eller false) ---
console.log(a > b, a < b, a >= 5, a <= 4) // true false true false
console.log(a === b, a !== b) // false true – samma värde OCH typ? / inte samma?
const fran: any = 5 // any, så att TypeScript tillåter nästa rad
console.log(fran == '5', fran === '5') // true false – == ändrar typ i smyg. Använd alltid ===

// --- Logiska operatorer ---
console.log(timme >= 8 && timme < 17) // && = OCH: båda måste vara sanna
console.log(timme < 8 || timme > 17) // || = ELLER: räcker att en är sann
console.log(!(timme > 8)) // ! = INTE: vänder på sant/falskt
const namnIn: string | null = null
console.log(namnIn ?? 'Gäst') // ?? = "om det är null/undefined, ta detta i stället"

// --- if / else if / else ---
if (timme < 8) {
    // första villkoret som stämmer vinner
    console.log('Stängt, öppnar 08')
} else if (timme < 17) {
    console.log('Öppet')
} else {
    console.log('Stängt')
} */

// --- if med "truthy": utan jämförelse ---
/*   const antalIKo: number = 0;
  if (antalIKo) { // 0 är falsy → blir false. Samma som antalIKo !== 0
    console.log("Det är kö");
  } else {
    console.log("Ingen kö");
  }
 */
//Switch GLÖM EJ BREAK
/* const dag: string = 'Blå'
switch (dag) {
    case 'Röd':
        console.log('Måndag')
        break
    case 'Blå':
        console.log('Tisdag')
        break
    case 'Gul':
    default: //Om inget ovan stämde
        console.log('Stängt kom inte hit')
}
 */

//Loopar, kör samma kod flera gånger

/* const lista: string[] = ['Kaffe', 'Latte'] */

//for = vet hur mpnga varv / behöver ett index
/* for (let i = 0; i < lista.length; i++) {
    console.log(i, lista[i])
}
 */

// while: kör så länge villkoret är sant
/* let nedrakning: number = 3
while (nedrakning > 0) {
    console.log(nedrakning)
    nedrakning-- //GLÖM INTE!!!! annars blir loopen oändlig
}
 */

//do---while
//OBS: Körs minst en gång
/* let tal: number = 10
do {
    console.log('Körs en gång oavsett')
    tal++
} while (tal < 5)
console.log(tal)
 */

//For of //Ta ett värde i taget
/* for (const produkt of lista) {
    console.log(produkt)
}
 */

//For in, utgår ifrån index!
/* for (const index in lista) {
    console.log(index, lista[index])
} */

//foreach, en metod på arrayen
/* lista.forEach((produkt, index) => {
    //En funktion körs för varje element
    console.log(index, produkt)
})

// break och continue
for (let n = 1; n <= 5; n++) {
    if (n === 2) {
        continue //hoppa över detta varv
    }
    if (n === 4) {
        break //avsluta hela loppen
    }
    console.log('n =', n)
}
 */

/* Funktioner */

//Funktionsdeklaration, function declaration
/* console.log(halsa1('Richard', 47))//"lyfts", hoisting
function halsa1(namn: string, age: number): string | number {
    let age2 = age + 1

    return age2
}
 */

//funktionsuttryck , function expression - funktionen läggs i en variabel

/* const halsa2 = function (namn: string): string {
    return namn
}
console.log(halsa2('Richard'))
 */

/* const priser: number[] = [35, 42, 30]
const medMoms = (pris: number) => pris * 1.12
priser.map(medMoms)
 */

//Pilfunktion arrow function
/* const halsa3 = (namn: string): string => {
    return namn
} */

/* function kvitto(pris: number) {
    const moms = pris * 0.12
    const total = pris + moms
    return { pris, moms, total }
}

const { moms, total } = kvitto(100)
console.log(moms, total)
 */

//funktion i funktion
/* function gorTvaGanger(uppgift: () => void): void {
    uppgift()
    uppgift()
}
gorTvaGanger(() => console.log('Brygger väldigt gott Kaffe'))
 */

/* function skrivHej(namn: string): void {
    console.log(`Hej ${namn}`)
}

const svar = skrivHej('Martin gillar Te')
console.log(svar) */

//funktionen nedan tar emot hur mpnga tal somhelst och returnerar summan av dom
/* function summera(...tal: number[]): number {
    let summa: number = 0
    for (const t of tal) {
        summa += t
    }
    return summa
}
console.log(summera(1, 2, 3), summera(10, 20))
 */

//Callback, en funktion skickas in till en annan
/* function upprepa(
    antal: number,
    gorDetta: (nr: number) => void,
    steg: number = 1
): void {
    for (let i = 1; i <= antal; i++) {
        gorDetta(i * steg) //Anropa funktionen vi fick
    }
}

upprepa(5, (nr) => console.log('Runda', nr), 10)
 */

//Scope
/* const utanfor: string = 'Syns överallt här'
function visaScope() {
    var inuti = 'syns bara i funktionen'
    return inuti;
    console.log(utanfor, inuti) //funtionen ser både ut och in
}
visaScope()
 */

//ARRAY: Varianter
//Array är en ordnad lista med index som börjar på 0
const lista: string[] = ['Kaffe', 'Latte', 'Bulle']
//console.log(lista[2]) //Komma åt index
//console.log(lista.length)//Kolla antalet i arrayen
//console.log(lista[lista.length - 2])

//lista.push('Pannkaka')
//lista.unshift('Pannkaka')
//lista.shift()
//lista.pop()

//console.log(lista.includes('Latte'))
//console.log(lista.indexOf('Latte'))
/* const lista2 = lista
//console.log(lista.slice(1, 3))
lista.splice(-1, 0, 'lemonad' + 0)
console.log(lista2)
 */

const lista3: number[] = [10, 4, 8, 11, 22]
const sorterad = [...lista].sort()
const sorterad2 = [...lista3].sort()
//console.log(sorterad)
//console.log(sorterad2)
//console.log(sorterad2.reverse())
lista3.sort((a, b) => a - b) //sortera lista
console.log(lista3)

/* Objekt */
