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
      /* The part parameter specifies a comma-separated list of one
      or more search resource properties that the API response will
      include. Set the parameter value to snippet. */
      part: "snippet",

      /* The type parameter restricts a search query to only retrieve
      a particular type of resource. The value is a comma-separated list
      of resource types. The default value is video,channel,playlist. */
      type: "video",

      /* The q parameter specifies the query term to search for. */
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),

      /* The maxResults parameter specifies the maximum number of items
       that should be returned in the result set. Acceptable values are
        0 to 50, inclusive. The default value is 5. */
      maxResults: 1,

      /* The order parameter specifies the method that will be used to
      order resources in the API response. The default value is relevance.
      viewCount – Resources are sorted from highest to lowest number of views.
      For live broadcasts, videos are sorted by number of concurrent viewers
      while the broadcasts are ongoing. */
      order: "viewCount",

      /* The publishedAfter parameter indicates that the API response should only
      contain resources created after the specified time. The value is an RFC 3339
      formatted date-time value (1970-01-01T00:00:00Z). */
      publishedAfter: "2016-01-01T00:00:00Z"
    });
    // execute the request
    request.execute(function(response) {
      console.log(response);
    });
  })
function init() {
  gapi.client.setApiKey("AIzaSyDdKeKCAfv7oXA-opJJeQcGVPT6kOQSrNA");
  gapi.client.load("youtube", "v3", function() {
    //yt api is ready
  })
}
