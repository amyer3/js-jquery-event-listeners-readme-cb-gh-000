function getIt(){
  $('p').on("click", alert("Hey!"))
}

function frameIt(){
  $('img').on("load", $('img').add('.tasty'))
}

function pressIt(){
  $('#typing').on('keypress', key => key.which == 71 ? alert("pressed") : null)
}

$(document).ready(function(){

// call functions here

});
