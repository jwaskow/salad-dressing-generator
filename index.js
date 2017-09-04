'use strict';

function begin (e) {
  e.preventDefault()
  $('#landing-page').hide()
  $('#vinaigrette-form').show()
}

function generate (e) {
  e.preventDefault()
  $('#ingredientList').empty()
  $('#recipeContainer').show()
  let checkedVinegar = ($("input[name=vinegar]:checked").val())
  let checkedOil = ($("input[name=oil]:checked").val())
  let aromaticList = $("input[name=aromatic]")
  let checkedAromatics = []
  let aromaticString = ''
  for (let i = 0; i < aromaticList.length; i++) {
    if (aromaticList[i].checked) {
      checkedAromatics.push(aromaticList.eq(i).data('ingredient'))
      aromaticString += ", "+aromaticList[i].value;
    }
  }
  aromaticString = aromaticString.substring(1)
  $('#ingredientList').append("<li>1/4 cup " + checkedVinegar + " vinegar</li>")
  $('#ingredientList').append("<li>3/4 cup " + checkedOil + " oil</li>")
  for (let i = 0; i < checkedAromatics.length; i++) {
    $('#ingredientList').append("<li>" + checkedAromatics[i] + "</li>")
  }
  $('#recipeBox').text('1.  Add a teaspoon of Dijon Mustard to the cup of an immersion blender.' + '\n' + '\n' +'\
2.  Add the ' + checkedVinegar + ' vinegar to the cup.' + '\n' + '\n' +'3.  Add the' + aromaticString + ' to the ' + checkedVinegar + ' vinegar and mustard.' + '\n' + '\n' +'\
4.  While blending, begin slowly pouring the ' + checkedOil + ' oil into the mixture.  Once a stable emulsion forms, slightly increase the speed of pouring the ' + checkedOil + ' oil.' + '\n' + '\n' +'\
5.  When all of the oil is blended, season to taste with salt and pepper and mix.  Vinaigrette will hold its emulsion for about 2 weeks.')
}

function vinColorDisplay () {
  $("#vinColor").css("background", $("input[name=vinegar]:checked").attr('data-vinColor'))
  $("#vinColor").css("box-shadow", "0px 0px 5px 5px " + $("input[name=vinegar]:checked").attr('data-vinColor'))
  $("#vinName").html($("input[name=vinegar]:checked").val())
}

function oilColorDisplay () {
  $("#oilColor").css("background", $("input[name=oil]:checked").attr('data-oilColor'))
  $("#oilColor").css("box-shadow", "0px 0px 5px 5px " + $("input[name=oil]:checked").attr('data-oilColor'))
  $("#oilName").html($("input[name=oil]:checked").val())
}

function aromaticColor (e) {
  if ($(e.target).prop("checked")) {
    $("label[for='"+$(this).attr("id")+"']").css("text-shadow", "0 0 5px " + $(e.target).attr('data-aromColor'))
  } else if (!($(e.target).prop("checked"))) {
    $("label[for='"+$(this).attr("id")+"']").css("text-shadow", "none")
  }
}

$(() => {
  $('#generate-btn').on('click', generate)
  $('#vinaigrette-form').hide()
  $('#start-btn').on('click', begin)
  $('#recipeContainer').hide()
  $(".vinegar").on("click", vinColorDisplay)
  $('.vinegar').hide()
  $(".oil").on("click", oilColorDisplay)
  $('.oil').hide()
  $('.aromatic').on('click', aromaticColor)
  $('.aromatic').hide()
})
