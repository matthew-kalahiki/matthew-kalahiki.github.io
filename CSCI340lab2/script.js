$(document).ready(function() {
  var randIndex;
  var isAnswered = false;
function nextQuestion(){
  $.ajax({
    url: "https://opentdb.com/api.php?amount=1",
    //contentType:"application/json",
    dataType: "json",
    success: function(data){
      $("#question").html(data.results[0].question);
      randIndex = Math.floor(Math.random() * 4);
      for(let i = 0; i < 4; i++){
        if(i==randIndex){
        $("#option" + i).html(data.results[0].correct_answer);
        $("#option" + i).css("visibility","visible");

      }else if(randIndex != 3 && i == 3){
        $("#option" + i).html(data.results[0].incorrect_answers[randIndex]);
        $("#option" + i).css("visibility","visible");

      }else{
        $("#option" + i).html(data.results[0].incorrect_answers[i]);
        $("#option" + i).css("visibility","visible");
      }
      };
      console.log(data);
    },
    error: function (jqXhr, textStatus, errorMessage) { // error callback
        $('h1').append('Error: ' + errorMessage);
    }
  })
  for(let i =0;i < 4; i++){
    $("#option" + i).click(function(){
      if(i == randIndex && !isAnswered){
        correct();
        $("#option" + i).css("background-color","green");
      }else if(!isAnswered){
        incorrect();
        $("#option" + i).css("background-color","red");
        $("#option" + randIndex).css("background-color","green");

      }

    })
  }
}
  function correct(){
    $("#response").html("Nice, You Got It!!!");
    console.log("right");
    isAnswered = true;
    $("#continue").css("visibility","visible");
  }
  function incorrect(){
    $.ajax({
      url: "https://icanhazdadjoke.com/",
      //contentType:"application/json",
      dataType: "json",
      success: function(data){
        $("#response").html("I am sorry, but that was incorrect. I hope this joke makes you feel better: " );
        $("#joke").html(data.joke);
      },
      error: function (jqXhr, textStatus, errorMessage) { // error callback
          $('h1').append('Error: ' + errorMessage);
      }
    })
    console.log("wrong");
    isAnswered = true;
    $("#continue").css("visibility","visible");
  }

  $("#start").click(function(){
    nextQuestion();
    $("#start").hide();
  })
  $("#continue").click(function(){
    $("#response").html("");
    $("#joke").html("");
    $("#continue").css("visibility","hidden");
    nextQuestion();
    for(let i =0;i < 4; i++){
      $("#option" + i).css("background-color","");
    }
    isAnswered = false;

  })
});
