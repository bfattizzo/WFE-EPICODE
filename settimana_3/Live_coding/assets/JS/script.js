/* 1. Dobbiamo capire in che mese siamo, per scriverlo nell'h1 e quanti giorni ha il mese per generare il corretto numero di celle. */

const now = new Date();

/* Per salvare gli appuntamenti abbiamo bisogno di un'array, perchè ogni appuntamento è una stringa, ogni giorno può contenere finiti appuntamenti e ogni mese ha un numero di giorni variabile.
Creeremo quindi un array di array dove l'array prade è il mese e gli array figli rappresentano i giorni. 
[ rappresenta il mese
    [rappresenta il primo giorno], [rappresenta il secondo giorno], [rappresenta il terzo giorno], ....
]

es. oggi è il 10 novembre: l'array padre rappresenta novembra e l'array figli rappresentano i 30 giorni
[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    ['09:00 - live coding calendario', '14:00 - esercizio quotidiano tombola', '18:00 - aperitivo],
    [],
    [],
    ...
]

Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese */

const appointments = [];

//Dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); //10 perchè siamo a novembre
  const nomeMese = monthNames[indiceMese]; //novembre
  title.innerText = nomeMese;
};

scriviMese();

//Sappiamo in che mese siamo, ma quanti giorni ha questo mese?
//Dal momento che febbraio negli anni bisestili ha 29 giorni, per sapere il mio mese quanti giorni ha mi serve anche l'anno

const giorniTotali = function () {
  const anno = now.getFullYear(); //2023 perchè siamo nel 2023
  const mese = now.getMonth(); //10 perchè siamo a novembre

  // dal momento che nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere qual è l'ultimo giorno del mese in corso per avere il suo numero di giorni
  // Per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese successivo al mese in corso e faccio -1

  let ultimoGiorno = new Date(anno, mese + 1, 0); // oggi questa data corrisponde allo 0 dicembre del 2023, che non esiste e che quindi è il 30 novembre 2023; novembre ha 30 giorni

  //"pensate facile" e per capire quanti giorni  ha un mese gli diamo il primo giorno del successivo e ne togliamo uno, ma il primo giorno del successivo che gli diamo è in realtà lo 0, ma non esiste quindi è il 30 novembre. Proprio pensare facile, non mi pare eccessivamente intuitivo

  const giorniTotali = ultimoGiorno.getDate();
  console.log(giorniTotali);
  return giorniTotali; // numeroGiorni è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti ai singoli giorni
};

giorniTotali();

// Quando carico un mese, eventuali classi selected precedenti devono essere rimosse altrimenti mi troverò selezionati i giorni del mese precedente che avevano degli appuntamenti

// Seleziono TUTTI gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};

// Quando faccio click su un giorno, nel div id="newMeetingDay" dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};

// A questo punto va creata la "griglia" dei div contenenti i giorni del mese in corso; questa griglia userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  // numero giorni è il numero di giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");

  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement("div"); // ad ogni giorno associo div
    cellaGiorno.classList.add("day"); // stilizzo il div come definito nel css

    cellaGiorno.addEventListener("click", function (e) {
      // rendo cliccabili i div dei giorni
      deselezionaCelle(); // deseleziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected"); // aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); // scrivo il giorno cliccato nella sezione Giorno del form
      // Se ci sono già eventi nella giornata devo far comparire la lista
      if (appointments[i].lenght > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appoitments");
        divAppuntamenti.style.display = "none";
      }
    });
    // devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    // "appendo" gli elementi creati (appendiamo i bambini)
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    // creato il calendario inserisco nell'array appointments l'array dei giorni del mese
    appointments.push([]);
  }
};

creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
  // Con questa funzione si popola la lista degli appuntamenti con gli appuntamenti del giorno

  // 1. prendere gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno];
  // 2. selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  // 3. svuotare la lista
  lista.innerHTML = "";

  // 4. ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  // 5. la lista è piena ma è ancora nascosta
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. giorno dell'appuntamento
    const selectedDay = document.getElementById('newMeetingDay').innerText;

    // 2. ora dell'appuntamento selezionato 
    const MeetingTime = document.getElementById('newMeetingTime').value;

    // 3. nome dell'appuntamento
    const meetingName = document.getElementById('newMeetingName').value;

    // 4. creo la stringa dell'appuntamento
    const stringaAppuntamento = `${MeetingTime} - ${meetingName}`;

    // 5. scrivo l'appuntamento nell'array
    const indiceArray = parseInt(selectedDay) - 1;
    appointments[indiceArray].push(stringaAppuntamento);

    // creo un pallino che evidezia nel calendario la presenza di un appuntamento
    const pallino = document.createElement('span');
    pallino.classList.add('pallino');
    
    // cerco il div del giorno selezionato
    const divSelezionato = document.querySelector('.selected');
    if (!divSelezionato.querySelector('.pallino')) {
        divSelezionato.appendChild(pallino);
    }
    mostraAppuntamenti(indiceArray);
});