function getIt(){
  $('p').on("click", alert("Hey!"))
}

function frameIt(){
  $('img').on("load", $('img').addClass('.tasty'))
}

function pressIt(){
  $('#typing').on('keypress', key => key.which == 71 ? alert("pressed") : null)
}

function submitIt(){
  
}

$(document).ready(function(){

// call functions here

});
