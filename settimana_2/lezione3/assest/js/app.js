// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CONTROLLARE LA VALIDITA' DEL FORM
4. CALCOLARE L'ETA'
5. VERIFICARE LA MAGGIORE O MINORE ETA'
6. SCRIVERE NELL'HTML
7. CANCELLARE IL FORM

EVENTO SCATENANTE 
click

VARIABILI GLOBALI
nome
anno
stato
*/


let nome; // globale in quanto utilizzata per leggere il campo di imput e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di impunt, calcolare l'età, verificare l'età, stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');

function eventHandler() {
    leggiForm();
    controlla()
    if (esegui) {
        calcolaEta();
        verifica();
        scrivi();
        cancella();
    } else {
        errore.innerHTML = 'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
        return;
    }
}

function controlla() {
    esegui = false;
    if (anno >= 1900 && anno <= 2023) {
        if (nome != '') {
            errore.innerHTML
            esegui = true;
        }
    
        return esegui;
    }
}

function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
    console.log(nome, anno);
}

function calcolaEta() {
    eta = 2023 - Number(anno);
    console.log(eta);
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
    console.log(stato);
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'ciao ' + nome; 
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei '+ stato;
}

function cancella() {
    document.getElementById('nome').value = ''; 
    document.getElementById('anno').value = '';
}