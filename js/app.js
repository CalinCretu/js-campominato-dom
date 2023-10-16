const gridElement = document.querySelector('.grid');
const playBtnElement = document.getElementById('play-btn');


playBtnElement.addEventListener('click', function () {
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
      currentCellElement.classList.add('bg-blue');
    })
  }
})

function getArrayOfRandomIntBetween() {
  const bombsArray = [];

  //popolare l'array con 16 numeri random
  while (bombsArray.length < 16) {
    // generare un numero random da range min a range max
    const n = getRandomIntInclusive(1, 100);
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
