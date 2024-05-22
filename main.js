// console.log('Hola JS!')

const inputColor = document.querySelector('#color')
const buttonRandomColor = document.querySelector('.randomColor')

// console.log(inputColor)
// console.log(inputColor.placeholder)

inputColor.addEventListener('input', function (event) {
  console.log(event.target.value)
  //  style="background-color: blue;"
  document.body.style.backgroundColor = event.target.value
})

buttonRandomColor.addEventListener('click', function (event) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)

  console.log(randomColor)

  // document.body.style.backgroundColor = '#' + randomColor
  document.body.style.backgroundColor = `#${randomColor}`
})

// TODO: Usar el botón copyColor para copiar el color seleccionado al clipboard (navigator.clipboard)
