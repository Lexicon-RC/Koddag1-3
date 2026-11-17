// =====================================================================
//  KAFÉ KARDEMUMMA – DAG 1, 2 OCH 3 I EN FIL
//
//  UPPLÄGG: varje moment har två delar.
//    A = VARIANTER   Vilka finns det? Vad skiljer dem åt? (korta exempel)
//    B = EXEMPEL     Vi använder det i kaféet (samma kafé hela dagen)
//
//  SÅ DEMAR DU:
//   1. npm run dev, öppna sidan + konsolen (F12) bredvid editorn.
//   2. Gå nedåt. Varje del ligger mellan /* och */.
//   3. Ta bort raderna med /* och */ → delen körs direkt när du sparar.
//   4. Läs kommentaren bredvid varje rad högt. GISSA innan du sparar.
//   5. Klassen dikterar B-delarna, du skriver.
//
//  Varje del ligger i { } så att samma namn kan återanvändas.
//  Det som behövs senare ligger utanför { } (markerat "NÄSTA STEG BEHÖVER DENNA").
//
//  DAG 1:  1 Variabler   2 Datatyper   3 Villkor
//  DAG 2:  4 Loopar      5 Funktioner
//  DAG 3:  6 Arrayer     7 Objekt      8 Array-metoder   9 Moduler (förklaring)   10 Sidan + kassan
// =====================================================================

// #####################################################################
//  DAG 1
// #####################################################################

// =====================================================================
//  STEG 1A – VARIABLER: VARIANTER
//  SÄG: "Det finns tre sätt att göra en variabel: const, let och var.
//        Regel: börja med const. Byt till let om värdet ska ändras.
//        Använd aldrig var."
// =====================================================================
/*
{
  // --- const: kan inte tilldelas om ---
  const kafeNamn: string = "Kafé Kardemumma"; // const = konstant, fast värde
  // kafeNamn = "Annat namn"; // GISSA: ta bort // → rött. const går inte att byta.

  const meny: string[] = ["Kaffe", "Latte"]; // OBS: const låser variabeln, inte innehållet
  meny.push("Kanelbulle"); // går bra! Listan får ändras
  console.log(kafeNamn, meny); // Kafé Kardemumma ["Kaffe","Latte","Kanelbulle"]

  // --- let: får tilldelas om ---
  let antalGaster: number = 0; // let = värdet ändras under tiden
  antalGaster = 5; // går bra
  antalGaster++; // ++ betyder "plus ett" (6)
  console.log(antalGaster); // 6

  // --- var: den gamla varianten (undvik) ---
  var gammal: string = "första"; // fungerar, men...
  var gammal: string = "andra"; // ...här går det att deklarera om samma namn: lätt att göra fel!
  console.log(gammal); // "andra"

  if (true) {
    var lacker: string = "syns utanför if"; // var bryr sig inte om { }
    let stannar: string = "syns bara här inne"; // let och const respekterar { }
    console.log(stannar);
  }
  console.log(lacker); // fungerar (!) – var "läcker" ut
  // console.log(stannar); // ta bort // → rött. let finns bara innanför sina { }

  // --- Klassikern: loop + tid ---
  for (var vi = 0; vi < 3; vi++) {
    setTimeout(() => console.log("var:", vi), 0); // GISSA: 3 3 3 (alla delar samma vi)
  }
  for (let li = 0; li < 3; li++) {
    setTimeout(() => console.log("let:", li), 0); // 0 1 2 (varje varv har sin egen li)
  }

  // --- Namngivning ---
  // camelCase, beskrivande namn:   antalGaster ✓   x ✗   antal_gaster ✗
}
*/

// =====================================================================
//  STEG 1B – VARIABLER: EXEMPEL (kaféets kassa)
//  SÄG: "Vad ändras under dagen, vad ändras inte? Det avgör const eller let."
// =====================================================================
/*
{
  const kafeNamn: string = "Kafé Kardemumma"; // ändras aldrig → const
  const moms: number = 0.12; // 12 % på mat, ändras aldrig → const
  let antalGaster: number = 0; // ändras under dagen → let
  let intakt: number = 0; // ändras under dagen → let

  antalGaster++; // en gäst kommer in
  intakt = intakt + 35; // betalar en kaffe (35 kr)
  antalGaster += 1; // += är en kortare variant av "antalGaster = antalGaster + 1"
  intakt += 42; // nästa gäst tar en latte (42 kr)

  console.log(`${kafeNamn}: ${antalGaster} gäster, ${intakt} kr`); // Kafé Kardemumma: 2 gäster, 77 kr
  console.log(`Varav moms: ${Math.round(intakt * moms)} kr`); // 77 * 0,12 = 9,24 → avrundat 9
}
*/

// =====================================================================
//  STEG 2A – DATATYPER: VARIANTER
//  SÄG: "Varje värde har en typ. TypeScript kollar att vi inte blandar ihop dem."
// =====================================================================
/*
{
  // --- Primitiva typer ---
  const text: string = "Kaffe"; // string = text
  const heltal: number = 35; // number = tal...
  const decimal: number = 3.5; // ...heltal och decimaltal är samma typ
  const sant: boolean = true; // boolean = true eller false
  const tomt: null = null; // null = medvetet tomt
  const saknas: undefined = undefined; // undefined = ingen har satt något värde
  console.log(typeof text, typeof heltal, typeof decimal, typeof sant); // string number number boolean
  console.log(typeof saknas); // "undefined"
  console.log(typeof tomt); // "object" (!) – ett känt fel i JavaScript, sedan 1995

  // --- Sammansatta typer ---
  const lista: number[] = [1, 2, 3]; // array: en lista
  const objekt: { namn: string } = { namn: "Kaffe" }; // object: nyckel + värde
  console.log(typeof lista, typeof objekt); // båda "object"

  // --- TypeScripts egna: union, literal och any ---
  let idnummer: string | number = 123; // union: antingen eller
  idnummer = "ABC-123"; // går bra
  let storlek: "liten" | "stor" = "liten"; // literal: bara dessa värden är tillåtna
  // storlek = "mellan"; // ta bort // → rött
  const vad: any = 5; // any = stäng av kontrollen. Undvik!
  console.log(idnummer, storlek, vad);

  // --- Omvandla mellan typer ---
  console.log(Number("42") + 1); // 43: text → tal
  console.log(String(42) + 1); // "421": tal → text
  console.log(parseInt("35 kr")); // 35: läser tal ur text
  console.log(Number("abc")); // NaN = "Not a Number"
  console.log("5" + 3); // GISSA: "53" – + mellan text och tal klistrar ihop
  console.log(Number("5") * 3); // 15

  // --- Sant eller falskt? (truthy / falsy) ---
  console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN)); // alla false = "falsy"
  console.log(Boolean("0"), Boolean(" "), Boolean([])); // alla true (!) – det mesta annat är "truthy"
}
*/

// =====================================================================
//  STEG 2B – DATATYPER: EXEMPEL (text och pris)
// =====================================================================
/*
{
  const produkt: string = "  kaffe latte "; // text med mellanslag
  console.log(produkt.trim()); // "kaffe latte" – trim tar bort mellanslag
  console.log(produkt.trim().toUpperCase()); // "KAFFE LATTE"
  console.log(produkt.trim().length); // 11 – antal tecken
  console.log(produkt.includes("latte")); // true – innehåller texten?
  console.log(produkt.trim().slice(0, 5)); // "kaffe" – del av texten

  const pris: number = 34.5;
  console.log(pris.toFixed(2)); // "34.50" – OBS: blir text!
  console.log(Math.round(pris), Math.floor(pris), Math.ceil(pris)); // 35 34 35: avrunda, nedåt, uppåt
  const prisMedMoms: number = pris * 1.12; // 38,64
  console.log(`${produkt.trim()} kostar ${prisMedMoms.toFixed(2)} kr inkl. moms`); // text + tal i en mening
}
*/

// =====================================================================
//  STEG 3A – OPERATORER OCH VILLKOR: VARIANTER
//  SÄG: "Datorn ska bestämma, inte jag. Först jämförelser, sedan sätt att välja väg."
// =====================================================================
/*
{
  const a: number = 5;
  const b: number = 3;
  const timme: number = 10;

  // --- Jämförelser (ger true eller false) ---
  console.log(a > b, a < b, a >= 5, a <= 4); // true false true false
  console.log(a === b, a !== b); // false true – samma värde OCH typ? / inte samma?
  const fran: any = 5; // any, så att TypeScript tillåter nästa rad
  console.log(fran == "5", fran === "5"); // true false – == ändrar typ i smyg. Använd alltid ===

  // --- Logiska operatorer ---
  console.log(timme >= 8 && timme < 17); // && = OCH: båda måste vara sanna
  console.log(timme < 8 || timme > 17); // || = ELLER: räcker att en är sann
  console.log(!(timme > 8)); // ! = INTE: vänder på sant/falskt
  const namnIn: string | null = null;
  console.log(namnIn ?? "Gäst"); // ?? = "om det är null/undefined, ta detta i stället"

  // --- if / else if / else ---
  if (timme < 8) { // första villkoret som stämmer vinner
    console.log("Stängt, öppnar 08");
  } else if (timme < 17) {
    console.log("Öppet");
  } else {
    console.log("Stängt");
  }

  // --- if med "truthy": utan jämförelse ---
  const antalIKo: number = 0;
  if (antalIKo) { // 0 är falsy → blir false. Samma som antalIKo !== 0
    console.log("Det är kö");
  } else {
    console.log("Ingen kö");
  }

  // --- switch: många val på ett och samma värde ---
  const dag: number = 3;
  switch (dag) {
    case 1: // om dag === 1
      console.log("Måndag");
      break; // utan break fortsätter den ner till nästa case (!)
    case 3:
      console.log("Onsdag");
      break;
    default: // inget case stämde
      console.log("Annan dag");
  }

  // --- ternary (kort if/else): villkor ? om sant : om falskt ---
  console.log(timme < 12 ? "Förmiddag" : "Eftermiddag");
}
*/

// =====================================================================
//  STEG 3B – VILLKOR: EXEMPEL (öppettider, dagens soppa, rabatt)
// =====================================================================
/*
{
  const timme: number = 10; // TESTA: 3, 12, 20
  const veckodag: number = 3; // TESTA: 1–7
  const alder: number = 70; // TESTA: 8, 30, 70

  // if: är det öppet?
  if (timme >= 8 && timme < 17) {
    console.log("Kaféet är öppet");
  } else {
    console.log("Kaféet är stängt");
  }

  // ternary: en etikett till skylten
  const skylt: string = timme >= 8 && timme < 17 ? "ÖPPET" : "STÄNGT";
  console.log(skylt);

  // switch: dagens soppa
  switch (veckodag) {
    case 1:
      console.log("Soppa: tomat");
      break;
    case 2:
    case 3: // tisdag och onsdag delar soppa (ingen break emellan)
      console.log("Soppa: broccoli");
      break;
    default:
      console.log("Soppa: dagens");
  }

  // if / else if / else: rabatt efter ålder
  let rabatt: number = 0;
  if (alder < 12) {
    rabatt = 50; // barn: 50 %
  } else if (alder >= 65) {
    rabatt = 20; // pensionär: 20 %
  } else {
    rabatt = 0;
  }
  const pris: number = 100;
  console.log(`Pris efter rabatt: ${pris - (pris * rabatt) / 100} kr`);
}
*/

// #####################################################################
//  DAG 2
// #####################################################################

// =====================================================================
//  STEG 4A – LOOPAR: VARIANTER
//  SÄG: "En loop kör samma kod flera gånger. Det finns fem sorter."
//  Rubrikerna nedan är en fusklapp: vilken ska jag använda när?
// =====================================================================
/*
{
  const lista: string[] = ["Kaffe", "Latte", "Bulle"];

  // --- for: du vet hur många varv / behöver index ---
  for (let i = 0; i < lista.length; i++) { // börja på 0, kör så länge i < 3, öka i med 1
    console.log(i, lista[i]); // 0 Kaffe, 1 Latte, 2 Bulle
  }

  // --- while: kör så länge villkoret är sant ---
  let nedrakning: number = 3;
  while (nedrakning > 0) { // kollar villkoret FÖRE varje varv
    console.log(nedrakning); // 3 2 1
    nedrakning--; // glöm inte! Annars blir loopen oändlig
  }

  // --- do...while: som while, men körs minst en gång ---
  let tal: number = 10;
  do {
    console.log("Körs en gång trots att villkoret är falskt:", tal); // kollar villkoret EFTER varvet
    tal++;
  } while (tal < 5);

  // --- for...of: ta ett VÄRDE i taget ---
  for (const produkt of lista) { // enklast när du inte behöver index
    console.log(produkt);
  }

  // --- for...in: ta en NYCKEL i taget ---
  for (const index in lista) { // för en array: index, men som TEXT (!)
    console.log(index, typeof index); // "0" string
  }

  // --- forEach: en metod på arrayen ---
  lista.forEach((produkt, index) => { // en funktion körs för varje element
    console.log(index, produkt);
  }); // OBS: går inte att avbryta med break

  // --- break och continue ---
  for (let n = 1; n <= 5; n++) {
    if (n === 2) {
      continue; // hoppa över detta varv
    }
    if (n === 4) {
      break; // avsluta hela loopen
    }
    console.log("n =", n); // 1 3
  }
}
*/

// =====================================================================
//  STEG 4B – LOOPAR: EXEMPEL (kvitto)
//  SÄG: "Två listor som hör ihop: namn och pris på samma index."
// =====================================================================
/*
{
  const namn: string[] = ["Kaffe", "Latte", "Kanelbulle", "Smörgås"];
  const priser: number[] = [35, 42, 32, 59];

  console.log("----- KVITTO -----");
  let totalt: number = 0; // här samlar vi summan
  for (let i = 0; i < namn.length; i++) { // for med index: namn[i] och priser[i] hör ihop
    console.log(`${namn[i]}: ${priser[i]} kr`);
    totalt += priser[i]; // lägg till priset
  }
  console.log(`Totalt: ${totalt} kr`); // 168 kr

  let summa: number = 0;
  for (const pris of priser) { // for...of räcker när vi bara behöver värdena
    summa += pris;
  }
  console.log(summa); // 168 igen

  for (const pris of priser) {
    if (pris > 50) {
      console.log("Första som kostar över 50 kr:", pris); // 59
      break; // sluta leta
    }
  }

  let minuter: number = 3; // while: stängning
  while (minuter > 0) {
    console.log(`Stänger om ${minuter} min`);
    minuter--;
  }
}
*/

// =====================================================================
//  STEG 5A – FUNKTIONER: VARIANTER
//  SÄG: "En funktion är ett recept: gör något med det du ger den, ge tillbaka svaret."
//  Samma sak kan skrivas på flera sätt. Vi går igenom skillnaderna.
// =====================================================================
/*
{
  // --- 1. function-deklaration ---
  console.log(halsa1("Anna")); // fungerar redan här: deklarationer "lyfts" (hoisting)
  function halsa1(namn: string): string { // (parameter: typ): returtyp
    return `Hej ${namn}!`; // return = svaret
  }

  // --- 2. function-uttryck: funktionen lagras i en variabel ---
  const halsa2 = function (namn: string): string {
    return `Hej ${namn}!`;
  };
  console.log(halsa2("Bo"));
  // Måste stå EFTER raden där den skapas. Prova: flytta console.log-raden ovanför → fel

  // --- 3. pilfunktion: samma sak, kortare ---
  const halsa3 = (namn: string): string => {
    return `Hej ${namn}!`;
  };
  const halsa4 = (namn: string): string => `Hej ${namn}!`; // en rad: utan { } och return
  console.log(halsa3("Cia"), halsa4("Dan"));

  // --- Funktion utan return (void): gör något, ger inget tillbaka ---
  function skrivHej(namn: string): void {
    console.log(`Hej ${namn}!`); // bara en utskrift
  }
  const svar = skrivHej("Eva"); // GISSA: vad är svar? → undefined
  console.log(svar);

  // --- Parametrar: flera, standardvärde, valfri, "resten" ---
  function medMoms(pris: number, moms: number = 0.12): number { // = 0.12: standardvärde
    return pris * (1 + moms);
  }
  console.log(medMoms(100), medMoms(100, 0.25)); // 112 125

  function halsaPa(namn: string, titel?: string): string { // ? = valfri (kan vara undefined)
    return titel ? `Hej ${titel} ${namn}` : `Hej ${namn}`;
  }
  console.log(halsaPa("Fia"), halsaPa("Fia", "doktor"));

  function summera(...tal: number[]): number { // ... = valfritt antal, samlas i en array
    let summa: number = 0;
    for (const t of tal) {
      summa += t;
    }
    return summa;
  }
  console.log(summera(1, 2, 3), summera(10, 20));

  // --- Callback: en funktion som skickas in till en annan ---
  function upprepa(antal: number, gorDetta: (nr: number) => void): void {
    for (let i = 1; i <= antal; i++) {
      gorDetta(i); // anropa funktionen vi fick
    }
  }
  upprepa(3, (nr) => console.log("Runda", nr)); // pilfunktion som argument

  // --- Scope: var variabler syns ---
  const utanfor: string = "syns överallt här";
  function visaScope(): void {
    const inuti: string = "syns bara i funktionen";
    console.log(utanfor, inuti); // funktionen ser både ut och in
  }
  visaScope();
  // console.log(inuti); // ta bort // → rött. Utanför ser man inte in.
}
*/

// =====================================================================
//  STEG 5B – FUNKTIONER: EXEMPEL (kaféets funktioner)
//  SÄG: "Skriver vi samma sak två gånger blir det en funktion."
//  Låt klassen diktera formateraPris rad för rad.
//  BUGG PÅ TAVLAN: ta bort ordet return. Vad skrivs ut? (undefined)
//
//  NÄSTA STEG BEHÖVER DENNA: de två funktionerna står utanför { }
// =====================================================================
/*
function formateraPris(pris: number): string { // in: ett tal. Ut: en text
  return `${pris} kr`;
}

function arOppet(timme: number): boolean { // in: klockslag. Ut: sant/falskt
  return timme >= 8 && timme < 17; // jämförelsen ÄR svaret
}

{
  function beraknaTotal(priser: number[]): number { // tar en lista, ger en summa
    let summa: number = 0;
    for (const pris of priser) {
      summa += pris;
    }
    return summa;
  }
  const rabatt = (pris: number, procent: number = 10): number => pris - (pris * procent) / 100; // pilfunktion + standardvärde
  function kvittorad(namn: string, pris: number): string { // använder en annan funktion
    return `${namn}: ${formateraPris(pris)}`;
  }

  console.log(kvittorad("Kaffe", 35)); // Kaffe: 35 kr
  console.log(`Totalt: ${formateraPris(beraknaTotal([35, 42, 32, 59]))}`); // Totalt: 168 kr
  console.log(arOppet(10), arOppet(20)); // true false
  console.log(rabatt(100), rabatt(100, 25)); // 90 75
}
*/

// #####################################################################
//  DAG 3
// #####################################################################

// =====================================================================
//  STEG 6A – ARRAYER: VARIANTER
//  SÄG: "En array är en ordnad lista. Index börjar på 0."
//  Det som ÄNDRAR originalet: push pop shift unshift splice sort reverse
//  Det som GER EN KOPIA:      slice  spread (...)  map  filter
// =====================================================================
/*
{
  const lista: string[] = ["Kaffe", "Latte", "Bulle"];
  console.log(lista[0]); // "Kaffe" – första
  console.log(lista[lista.length - 1]); // "Bulle" – sista
  console.log(lista.length); // 3
  console.log(lista[10]); // GISSA: undefined

  // --- Lägga till och ta bort (ändrar listan) ---
  lista.push("Smörgås"); // lägg till SIST
  lista.unshift("Te"); // lägg till FÖRST
  console.log(lista); // ["Te","Kaffe","Latte","Bulle","Smörgås"]
  const sista = lista.pop(); // ta bort SISTA (och ge tillbaka den)
  const forsta = lista.shift(); // ta bort FÖRSTA (och ge tillbaka den)
  console.log(sista, forsta); // Smörgås Te

  // --- Leta ---
  console.log(lista.includes("Latte")); // true – finns den?
  console.log(lista.indexOf("Latte")); // 1 – var? (-1 om den saknas)

  // --- Klippa ---
  console.log(lista.slice(0, 2)); // ["Kaffe","Latte"] – KOPIA av del, originalet orört
  lista.splice(1, 1); // ta bort 1 element från index 1 – ÄNDRAR originalet
  console.log(lista); // ["Kaffe","Bulle"]

  // --- Slå ihop och packa upp ---
  const fler: string[] = [...lista, "Te", "Kakao"]; // spread: "ös ut" lista i en ny
  const [forstaDryck, andraDryck] = fler; // destructuring: plocka ut de två första
  console.log(fler, forstaDryck, andraDryck);
  console.log(fler.join(" + ")); // "Kaffe + Bulle + Te + Kakao" – array → text

  // --- Sortera och vända (ändrar originalet) ---
  const sorterad = [...fler].sort(); // kopiera först, annars ändras fler
  console.log(sorterad.reverse()); // omvänd ordning
}
*/

// =====================================================================
//  STEG 6B – ARRAYER: EXEMPEL (beställningen)
// =====================================================================
/*
{
  const bestallning: string[] = []; // en tom lista som växer

  bestallning.push("Kaffe"); // en gäst beställer...
  bestallning.push("Bulle");
  bestallning.push("Kaffe");
  console.log(`Antal: ${bestallning.length}`); // 3
  console.log(`Beställning: ${bestallning.join(", ")}`); // Kaffe, Bulle, Kaffe

  const index: number = bestallning.indexOf("Bulle"); // gästen ångrar sig: ta bort Bulle
  if (index !== -1) { // -1 = fanns inte
    bestallning.splice(index, 1);
  }
  console.log(bestallning); // ["Kaffe","Kaffe"]
  console.log(bestallning.includes("Kaffe") ? "Kaffe finns i beställningen" : "Inget kaffe");
}
*/

// =====================================================================
//  STEG 7A – OBJEKT: VARIANTER
//  SÄG: "Ett objekt samlar sådant som hör ihop: nyckel och värde."
// =====================================================================
/*
{
  // --- Skapa och läsa ---
  const kaffe = { namn: "Kaffe", pris: 35, vegetariskt: true }; // objekt-literal
  console.log(kaffe.namn); // punkt-notation: det vanliga
  console.log(kaffe["pris"]); // hakparentes: bra när nyckeln finns i en variabel
  const nyckel = "namn";
  console.log(kaffe[nyckel]);

  // --- Ändra ---
  kaffe.pris = 38; // går bra (const låser variabeln, inte innehållet)
  // kaffe.storlek = "stor"; // ta bort // → rött. Finns inte i typen.

  // --- Objekt i objekt ---
  const kafe = { namn: "Kardemumma", adress: { gata: "Storgatan 1", stad: "Stockholm" } };
  console.log(kafe.adress.stad); // Stockholm

  // --- Metod: en funktion i objektet ---
  const latte = {
    namn: "Latte",
    pris: 42,
    beskriv() { // "metod"
      return `${this.namn} kostar ${this.pris} kr`; // this = objektet själv
    },
  };
  console.log(latte.beskriv());

  // --- Nycklar, värden, par ---
  console.log(Object.keys(kaffe)); // ["namn","pris","vegetariskt"]
  console.log(Object.values(kaffe)); // ["Kaffe",38,true]
  console.log(Object.entries(kaffe)); // [["namn","Kaffe"], ...]

  // --- Kopiera och packa upp ---
  const dyrare = { ...kaffe, pris: 45 }; // spread: kopia, men med nytt pris
  console.log(kaffe.pris, dyrare.pris); // 38 45 – originalet är orört
  const { namn, pris } = kaffe; // destructuring: plocka ut egenskaper
  console.log(namn, pris);

  // --- Typer för objekt: interface (och type) ---
  interface Produkt {
    namn: string;
    pris: number;
    rabatt?: number; // ? = valfri
    readonly id: number; // readonly = får inte ändras
  }
  const te: Produkt = { namn: "Te", pris: 30, id: 1 }; // rabatt behövs inte
  te.rabatt = 5; // går, den är valfri
  // te.id = 2; // ta bort // → rött. readonly
  delete te.rabatt; // går bara på valfria egenskaper
  console.log(te);
}
*/

// =====================================================================
//  STEG 7B – OBJEKT: EXEMPEL (menyn)
//  SÄG: "Nu slipper vi två listor. En rad på menyn = ett objekt."
//  GISSA: vad händer om jag glömmer pris i ett objekt? (rött)
//
//  NÄSTA STEG BEHÖVER DENNA: MenyRad och menyn står utanför { }
//  OBS: den här delen kräver STEG 5B (formateraPris).
// =====================================================================
/*
interface MenyRad { // en ritning: så här ska varje rad se ut
  namn: string;
  pris: number;
  vegetariskt: boolean;
}

const menyn: MenyRad[] = [ // en array av objekt
  { namn: "Kaffe", pris: 35, vegetariskt: true },
  { namn: "Latte", pris: 42, vegetariskt: true },
  { namn: "Kanelbulle", pris: 32, vegetariskt: true },
  { namn: "Smörgås", pris: 59, vegetariskt: false },
  { namn: "Köttbullar", pris: 89, vegetariskt: false },
  { namn: "Veganwrap", pris: 75, vegetariskt: true },
];

{
  console.log(menyn[0]); // hela objektet
  console.log(menyn[0].namn); // "Kaffe" – punkt tar ut en egenskap

  for (const rad of menyn) { // en rad i taget
    console.log(`${rad.namn}: ${formateraPris(rad.pris)}${rad.vegetariskt ? " (veg)" : ""}`);
  }

  // Objekt delas som referens: det är samma objekt, inte en kopia!
  const kaffe = menyn[0];
  kaffe.pris = 38; // vi ändrar via "kaffe"...
  console.log(menyn[0].pris); // ...och menyn ändras också: 38 (!)
  kaffe.pris = 35; // sätt tillbaka
}
*/

// =====================================================================
//  STEG 8A – ARRAY-METODER: VARIANTER
//  SÄG: "Förra gången gick vi igenom listor med loopar. Det finns metoder som
//        gör det kortare. De tar emot en funktion (callback) och kör den på varje element."
//
//    metod      returnerar       används för att...
//    forEach    inget            göra något per element
//    map        ny lista (lika lång)   göra om varje element
//    filter     ny lista (kortare)     behålla de som passar
//    find       ETT element/undefined  hitta första träffen
//    some       true/false             finns minst en som passar?
//    every      true/false             passar alla?
//    reduce     ETT värde              slå ihop allt till ett
//    sort       samma lista, sorterad  sortera (ändrar originalet!)
// =====================================================================
/*
{
  const tal: number[] = [1, 2, 3, 4, 5];

  tal.forEach((t) => console.log(t)); // gör något per element, ger inget tillbaka
  console.log(tal.map((t) => t * 2)); // [2,4,6,8,10] – lika många element
  console.log(tal.filter((t) => t > 2)); // [3,4,5] – bara de som uppfyller villkoret
  console.log(tal.find((t) => t > 2)); // 3 – första träffen
  console.log(tal.find((t) => t > 9)); // undefined – ingen träff
  console.log(tal.some((t) => t > 4)); // true – minst en
  console.log(tal.every((t) => t > 0)); // true – alla
  console.log(tal.reduce((summa, t) => summa + t, 0)); // 15 – börja på 0, lägg till ett i taget
  console.log([3, 1, 2].sort((a, b) => a - b)); // [1,2,3] – a - b = stigande ordning

  // Metoderna kan kedjas: filter först, sedan map
  console.log(tal.filter((t) => t % 2 === 0).map((t) => t * 10)); // [20,40]

  // Samma sak med for-loop och med filter. Vilken är lättast att läsa?
  const jamna: number[] = [];
  for (const t of tal) {
    if (t % 2 === 0) {
      jamna.push(t);
    }
  }
  console.log(jamna, tal.filter((t) => t % 2 === 0)); // båda [2,4]
}
*/

// =====================================================================
//  STEG 8B – ARRAY-METODER: EXEMPEL (frågor till menyn)
//  KRÄVER: STEG 5B och 7B
// =====================================================================
/*
{
  console.log(menyn.map((rad) => rad.namn)); // alla namn: ["Kaffe","Latte",...]
  console.log(menyn.filter((rad) => rad.vegetariskt).map((rad) => rad.namn)); // bara veg, bara namn
  console.log(menyn.find((rad) => rad.namn === "Kaffe")); // objektet för Kaffe
  console.log(menyn.some((rad) => rad.pris > 80)); // finns något över 80 kr? true
  console.log(menyn.every((rad) => rad.pris < 100)); // är allt under 100 kr? true

  const summa: number = menyn.reduce((tot, rad) => tot + rad.pris, 0); // alla priser ihop
  console.log(`Hela menyn kostar ${formateraPris(summa)}`); // 332 kr

  const sorterad = [...menyn].sort((a, b) => a.pris - b.pris); // KOPIERA först, sort ändrar annars menyn
  console.log(sorterad.map((rad) => `${rad.namn} ${rad.pris}`)); // billigast först
  console.log(`Dyrast: ${sorterad[sorterad.length - 1].namn}`); // Köttbullar
}
*/

// =====================================================================
//  STEG 9 – MODULER (bara att förklara, inget att aktivera)
//  SÄG: "Filen blir lång. Då delar vi upp koden i flera filer. Det som ska
//        delas får ordet export, och den som behöver det skriver import."
//
//  VISA (säg, skriv inte):
//
//    I en ny fil, till exempel src/data.ts:
//      export function formateraPris(pris: number): string { ... }  // named export
//      export interface MenyRad { ... }                              // även typer
//      export const menyn: MenyRad[] = [ ... ];
//      export default function halsa(namn: string) { ... }           // default: max en per fil
//
//    Överst i main.ts:
//      import { formateraPris, menyn, type MenyRad } from "./data";  // named: inom { }
//      import halsa from "./data";                                   // default: utan { }
//      import * as data from "./data";                               // allt som ett objekt
//
//  SKILLNAD: named export kan vara flera per fil och måste importeras med
//  samma namn. Default export är max en per fil och får importeras med
//  vilket namn man vill. "type" framför betyder att bara typen hämtas.
//
//  UPPGIFT I REPOT (dag 3): flytta MenyRad, menyn och formateraPris till en egen
//  fil data.ts, lägg export framför och importera i main.ts. Sidan ska fungera
//  precis som förut.
// =====================================================================

// =====================================================================
//  STEG 10A – SIDAN (DOM): VARIANTER
//  SÄG: "Nu flyttar vi från konsolen till sidan. JavaScript kan hitta,
//        ändra, skapa och lyssna på element i index.html."
//  KRÄVER: index.html (finns redan). Allt här syns på sidan.
// =====================================================================
/*
{
  // --- Hitta ---
  const status = document.getElementById("status"); // via id
  const rubrik = document.querySelector("h2"); // via CSS-väljare (första träffen)
  console.log(status, rubrik); // kan vara null om det inte finns!

  // --- Ändra ---
  if (status) { // kolla att den finns innan du använder den
    status.textContent = "Öppet"; // textContent: ren text
    status.className = "badge text-bg-success"; // className: Bootstrap-klasser
  }
  const ruta = document.getElementById("special-ruta");
  if (ruta) {
    ruta.innerHTML = "<b>Hej!</b> Det här är HTML"; // innerHTML: tolkas som HTML (använd inte med användartext)
  }

  // --- Skapa ---
  const nytt = document.createElement("p"); // skapa ett nytt element
  nytt.textContent = "Skapat med JavaScript";
  ruta?.appendChild(nytt); // ?. = "om ruta finns". Lägg in det på sidan

  // --- Lyssna ---
  document.getElementById("alla")?.addEventListener("click", () => { // när någon klickar...
    console.log("Någon klickade på Alla"); // ...kör funktionen
  });
}
*/

// =====================================================================
//  STEG 10B – SLUTEXEMPEL: KAFÉ-KASSAN PÅ SIDAN
//  KRÄVER: STEG 5B (formateraPris, arOppet) och 7B (MenyRad, menyn)
//  Allt vi gått igenom i dag på en gång. Gå uppifrån och ned och peka:
//  variabler, villkor, funktioner, loop, objekt, filter, reduce, push, import-ish.
//  TESTA: Vegetariskt, Lägg till (flera gånger), Dagens special.
// =====================================================================
/*
{
  // --- Variabler och typer ---
  let specialNamn: string = ""; // vilken rätt som är dagens special ("" = ingen än)
  const bestallning: MenyRad[] = []; // listan växer när man klickar på Lägg till

  // --- Funktion: priset just nu (special = 5 kr billigare) ---
  function aktuelltPris(rad: MenyRad): number {
    return rad.namn === specialNamn ? rad.pris - 5 : rad.pris; // ternary
  }

  // --- Öppet/stängt i menyraden: villkor + funktion ---
  const status = document.getElementById("status");
  if (status) {
    if (arOppet(new Date().getHours())) { // klockan nu
      status.textContent = "Öppet";
      status.className = "badge text-bg-success";
    } else {
      status.textContent = "Stängt";
      status.className = "badge text-bg-danger";
    }
  }

  // --- Rita menyn: loop över objekt, bygger Bootstrap-kort ---
  function visaMeny(rader: MenyRad[]): void {
    const meny = document.getElementById("meny"); // rutan där korten ligger (flexbox i index.html)
    if (!meny) {
      return; // finns den inte: avbryt
    }
    meny.innerHTML = ""; // töm rutan först

    const antal = document.getElementById("antal"); // raden "Visar X av Y"
    if (antal) {
      antal.textContent = `Visar ${rader.length} av ${menyn.length} rätter`;
    }

    for (const rad of rader) { // ett kort per rad
      const kort = document.createElement("div");
      kort.className = "card p-3"; // Bootstrap: kort med luft
      const badge = rad.namn === specialNamn ? ` <span class="badge text-bg-warning">Special!</span>` : "";
      kort.innerHTML = `<h5>${rad.namn}${badge}</h5><p class="mb-2">${formateraPris(aktuelltPris(rad))}</p>`;

      const knapp = document.createElement("button"); // knapp på varje kort
      knapp.className = "btn btn-dark";
      knapp.textContent = "Lägg till";
      knapp.addEventListener("click", () => { // när någon klickar:
        bestallning.push(rad); // array: lägg raden i beställningen
        visaBestallning(); // rita om beställningen
      });
      kort.appendChild(knapp);

      meny.appendChild(kort); // lägg kortet i rutan
    }
  }

  // --- Rita beställningen: map och reduce ---
  function visaBestallning(): void {
    const lista = document.getElementById("bestallning");
    const summaRuta = document.getElementById("summa");
    if (!lista || !summaRuta) {
      return;
    }
    // map: varje rad blir en <li>, join slår ihop till en text
    lista.innerHTML = bestallning
      .map(
        (rad) => `
        <li class="list-group-item d-flex justify-content-between">
          <span>${rad.namn}</span><span>${formateraPris(aktuelltPris(rad))}</span>
        </li>`,
      )
      .join("");
    // reduce: summan av alla priser
    const summa = bestallning.reduce((tot, rad) => tot + aktuelltPris(rad), 0);
    summaRuta.textContent = `Totalt: ${formateraPris(summa)}`;
  }

  visaMeny(menyn); // rita menyn första gången

  // --- Knappar: filter ---
  document.getElementById("alla")?.addEventListener("click", () => {
    visaMeny(menyn); // alla rader
  });
  document.getElementById("veg")?.addEventListener("click", () => {
    visaMeny(menyn.filter((rad) => rad.vegetariskt)); // bara de där vegetariskt är true
  });

  // --- Dagens special: slump ---
  document.getElementById("special")?.addEventListener("click", () => {
    const nummer = Math.floor(Math.random() * menyn.length); // slumpa index 0..5
    const val = menyn[nummer]; // plocka ut den raden
    specialNamn = val.namn; // kom ihåg vilken (aktuelltPris och visaMeny använder den)
    visaMeny(menyn); // rita om: kortet får nytt pris och en badge
    visaBestallning(); // rita om: summan följer med

    const ruta = document.getElementById("special-ruta");
    if (ruta) {
      ruta.innerHTML = `<div class="alert alert-warning">Dagens special: <b>${val.namn}</b> för ${formateraPris(aktuelltPris(val))}</div>`;
    }
  });
}
*/
