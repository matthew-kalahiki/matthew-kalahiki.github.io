$(document).ready(function() {
  $.ajax({
    type:'Get',
    URL: "https://opentdb.com/api.php?amount=10",
    dataType: "json",
    success: function(){
      $("h2").text("works");
    }
  })
});
