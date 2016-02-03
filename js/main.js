var vidResults = 1;
// $.get(
//   "",{
//     part:'',
//     key: 'AIzaSyDdKeKCAfv7oXA-opJJeQcGVPT6kOQSrNA'},
//     function(data){
//       $.each(data.items, function(i, item) {
//         console.log(item);
//       })
//     }
//   );

$('form').on('submit', function(e){
  e.preventDefault();
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part: 'snippet',
      maxResults: vidResults,
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
      maxResults: vidResults,
      order: "viewCount",
      publishedAfter: "2016-01-01T00:00:00Z",
      key: 'AIzaSyDdKeKCAfv7oXA-opJJeQcGVPT6kOQSrNA'},
      function(data){
        var output;
         $("#results").html("");
        $.each(data.items, function(i, item){
          console.log(item);
          videoTitle = item.snippet.title;
          videoId = item.id.videoId;

          output = '<div class="item"><h2>'+videoTitle+'</h2><li><iframe class="video" width="640" height="360" src="//www.youtube.com/embed/'+videoId+' frameborder="0" allowfullscreen></iframe></li></div>';
          //Append to results div
          $("#results").append(output);
        });
      }
    );
});

function init() {
  gapi.client.setApiKey("AIzaSyDdKeKCAfv7oXA-opJJeQcGVPT6kOQSrNA");
  gapi.client.load("youtube", "v3", function() {
    //youtube api is ready
  })
}
// $('form').on('submit', function(e) {
//   e.preventDefault();
//   //prepare the request
//   var request = gapi.client.youtube.search.list({
//     /* The part parameter specifies a comma-separated list of one
//     or more search resource properties that the API response will
//     include. Set the parameter value to snippet. */
//     part: "snippet",
//
//     /* The type parameter restricts a search query to only retrieve
//     a particular type of resource. The value is a comma-separated list
//     of resource types. The default value is video,channel,playlist. */
//     type: "video",
//
//     /* The q parameter specifies the query term to search for. */
//     q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//
//     /* The maxResults parameter specifies the maximum number of items
//     that should be returned in the result set. Acceptable values are
//     0 to 50, inclusive. The default value is 5. */
//     maxResults: 1,
//
//     /* The order parameter specifies the method that will be used to
//     order resources in the API response. The default value is relevance.
//     viewCount – Resources are sorted from highest to lowest number of views.
//     For live broadcasts, videos are sorted by number of concurrent viewers
//     while the broadcasts are ongoing. */
//     order: "viewCount",
//
//     /* The publishedAfter parameter indicates that the API response should only
//     contain resources created after the specified time. The value is an RFC 3339
//     formatted date-time value (1970-01-01T00:00:00Z). */
//     publishedAfter: "2016-01-01T00:00:00Z"
//   });
//   // execute the request
//   request.execute(function(response) {
//     var results = response.result;
//     // reset the results
//     $("#results").html("");
//     $.each(results.items, function(index, item) {
//       //The video ID is in item.id.videoId &&&& title is in item.snippet.title
//       $("#results").append(item.id.videoId + " " + item.snippet.title + "<br>");
//     })
//   });
// })
