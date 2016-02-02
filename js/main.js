// $('button').on('click', function() {
//   $('button').removeClass("selected");
//   $(this).addClass("selected");
//
//   var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON(flickrAPI, flickrOptions, displayPhotos);
//
// });

  // $.ajax({
  //   url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  //   dataType: "json",
  //   success: function(response) {
  //     json = (response);
  //     console.log(json);
  //   }
  // });

  $('form').on('submit', function(e) {
    e.preventDefault();
    //prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
    })
  })
function init() {
  gapi.client.setApiKey("AIzaSyDdKeKCAfv7oXA-opJJeQcGVPT6kOQSrNA");
  gapi.client.load("youtube", "v3", function() {
    //yt api is ready
  })
}
