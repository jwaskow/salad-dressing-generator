'use strict';

function buttonClick (e) {
  e.preventDefault()
  console.log('hello')
}

function total (e) {
  e.preventDefault()
  let checkedVinegar = ($("input[name=vinegar]:checked").val())
  let checkedOil = ($("input[name=oil]:checked").val())
  console.log($("input[name=vinegar]:checked").val())
  console.log($("input[name=oil]:checked").val())
  let aromaticList = $("input[name=aromatic]")
  let checkedAromatics = []
  let aromaticString = ''
  for (let i = 0; i < aromaticList.length; i++) {
    if (aromaticList[i].checked) {
      checkedAromatics.push(aromaticList[i].value)
      aromaticString += ", "+aromaticList[i].value;
    }
  }
  aromaticString = aromaticString.substring(1)
  // let aromaticNumber = checkedAromatics.length
  // for (let i = 0; i < (aromaticNumber - 1); i++) {
  //   aromaticString + array[i]
  // }
  // console.log(aromaticString);
  console.log(checkedAromatics);
  console.log(aromaticString);
  $('#recipeBox').text('First add a teaspoon of Dijon Mustard to the cup of an immersion blender. \
  Next add the ' + checkedVinegar + ' vinegar to the cup.  Add the ' + aromaticString + ' to the ' + checkedVinegar + ' vinegar and mustard. \
  While blending, start very slowly pouring the ' + checkedOil + ' oil into the mixture.  Once a stable emulsion forms, slightly increase the speed of pouring the ' + checkedOil + ' oil.  \
  When all of the oil is blended, season to taste with salt and pepper and mix.  Vinaigrette will hold its emulsion for about 2 weeks.')
}

$(() => {
  $('#myButton').on('click', total)
})
