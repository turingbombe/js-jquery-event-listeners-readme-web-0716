//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();
});
  function getIt(){
    $('p').on('click', function(){
      alert('Hey!')
    });
  }

  function frameIt(){
    $('img').on('load', function(){
      $(this).css('border', "solid 2px red");
      $(this).addClass("tasty");
    })
  }

  function submitIt(){
    $('form').on('submit', function(){
        alert('Your form is going to be submitted now.');
        return;
    })
  }

  function pressIt(){
    $('#typing').on('keydown',function(key){
      if(key.which == 71){
        alert("You're a G")
        return
      }
    })
  }