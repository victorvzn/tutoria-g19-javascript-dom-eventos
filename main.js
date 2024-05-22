// console.log('Hola JS!')

const inputColor = document.querySelector('#color')

// console.log(inputColor)
// console.log(inputColor.placeholder)

inputColor.addEventListener('input', function (event) {
  console.log(event.target.value)
  //  style="background-color: blue;"
  document.body.style.backgroundColor = event.target.value
})