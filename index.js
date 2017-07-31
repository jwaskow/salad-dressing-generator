function buttonClick (e) {
  e.preventDefault()
  console.log('hello')
}

$(() => {
  $('#myButton').on('click', buttonClick)
})
