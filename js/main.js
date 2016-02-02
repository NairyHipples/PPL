$('button').on('click', function() {
  $('button').removeClass("selected");
  $(this).addClass("selected");

  $.ajax({
    url: "http://brottsplatskartan.se/api.php?action=getEvents&period=1440&area=",
    dataType: "json",
    success: function(response) {
      json = (response);
      console.log(json);
    }
  });

});
