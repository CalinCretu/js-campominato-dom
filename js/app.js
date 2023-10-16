const gridElement = document.querySelector('.grid')
const playBtnElement = document.getElementById('play-btn')
playBtnElement.addEventListener('click', function () {
  gridElement.innerHTML = ''
  for (let i = 0; i < 100; i++) {
    const n = i + 1
    const htmlCell = '<div class="cell">' + n + '</div>'
    gridElement.innerHTML = gridElement.innerHTML + htmlCell
  }
  const cellDomElements = document.querySelectorAll('.cell')
  for (let i = 0; i < cellDomElements.length; i++) {
    const currentCellElement = cellDomElements[i]
    currentCellElement.addEventListener('click', function () {
      console.log(i + 1)
      currentCellElement.classList.add('bg-blue')
    })
  }
})
const cellDomElement = document.querySelector('.cell')
function onCellClick() {
  this.classList.add('bg-green')
}
