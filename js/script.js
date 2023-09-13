// dichiaro le variabili
const itemWrapper = document.querySelector('.items-wrapper');
const btnNext = document.querySelector('.down');
const btnPrev = document.querySelector('.up');

// creo l'array contenente le immagini
const images = [
  '/img/01.webp',
  '/img/02.webp',
  '/img/03.webp',
  '/img/04.webp',
  '/img/05.webp'
];

// Inizializzo l'indice corrente per la prima immagine nel carosello
let currentIndex = 0;

// Ciclo l'inserimento delle immagini
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  console.log(image)
  // creo l'elemento <img> nell'html
  itemWrapper.innerHTML += `<img src="${image}" class="hide">`;
}

// Mostra la prima immagine all'avvio
itemWrapper.querySelector('img').classList.remove('hide');

// Event listener per il pulsante next
btnNext.addEventListener('click', function () {
  // aggiungo classe hide
  itemWrapper.querySelector(`img:nth-child(${currentIndex + 1})`).classList.add('hide');
  // incremento il contatore
  currentIndex = (currentIndex + 1) % images.length;
  // rimuovo la classe hide
  itemWrapper.querySelector(`img:nth-child(${currentIndex + 1})`).classList.remove('hide');
});


// Event listener per il pulsante prev
btnPrev.addEventListener('click', function () {
  // aggiungo classe hide
  itemWrapper.querySelector(`img:nth-child(${currentIndex + 1})`).classList.add('hide');
  // decremento il contatore
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  // rimuovo la classe hide
  itemWrapper.querySelector(`img:nth-child(${currentIndex + 1})`).classList.remove('hide');
});