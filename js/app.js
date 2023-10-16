const gridElement = document.querySelector('.grid');
const playBtnElement = document.getElementById('play-btn');


playBtnElement.addEventListener('click', function () {
  const sectionDOMElement = document.querySelector('.big-section')
  sectionDOMElement.classList.add('bg-blue-03')
  gridElement.classList.remove('pointer-none')
  gridElement.innerHTML = '';
  const bombs = getArrayOfRandomIntBetween(1, 100, 16);
  console.log(bombs)
  for (let i = 0; i < 100; i++) {
    const n = i + 1;
    const htmlCell = '<div class="cell">' + n + '</div>';
    gridElement.innerHTML = gridElement.innerHTML + htmlCell;
  }
  const cellDomElements = document.querySelectorAll('.cell')
  for (let i = 0; i < cellDomElements.length; i++) {
    const currentCellElement = cellDomElements[i]
    currentCellElement.addEventListener('click', function () {
      console.log(i + 1);

      const cellNumber = i + 1;
      const sectionDOMElement = document.querySelector('.big-section')
      console.log(cellNumber)
      if (bombs.includes(cellNumber)) {
        currentCellElement.classList.add('bg-red', 'pointer-none');
        sectionDOMElement.classList.add('bg-red-03')
        sectionDOMElement.classList.remove('bg-blue-03')
        gridElement.classList.add('pointer-none')
      }

      // game over
      // ALTRIMENTI
      else {
        currentCellElement.classList.add('bg-blue', 'pointer-none');
      }
      // incermentiamo il punteggio


      // SE controllare se l'utente ha vinto
      // stampiamo hai vinto con il punteggio
    })
  }
})

function getArrayOfRandomIntBetween(minRange, maxRange, number) {
  const bombsArray = [];

  //popolare l'array con 16 numeri random
  while (bombsArray.length < number) {
    // generare un numero random da range min a range max
    const n = getRandomIntInclusive(minRange, maxRange);
    console.log(bombsArray.includes(n))
    // SE n non e' presente nell'array di bombs
    if (!bombsArray.includes(n)) {
      bombsArray.push(n);
    }
  }

  //return aray di numeri generati
  return bombsArray;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
