$(document).ready(function() {
  $.ajax({
    URL: "https://opentdb.com/api.php?amount=10",
    //contentType:"application/json",
    dataType: "json",
    success: function(data){
      $("h2").text("works");
    },
    error: function (jqXhr, textStatus, errorMessage) { // error callback
        $('h1').append('Error: ' + errorMessage);
        console.warn(xhr.responseText);
    }
  })
});
