$(function() {
  $("#resultsButton").click(function() {
      
      if ( ($("#score1")).val() > ($("#score2")).val() ) {
          $("#outcome").html("Awesome, you guys won!");
      } else {
          $("#outcome").html("Darn, better luck nextime");
      }
  })
});