$(document).ready(function() {

    $('button').on('click', function() {
      var input = $('#input').val();
      if(input==null){
        $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC")
            .then(function(response) {
                var gif = response.data;
                var gifpic = response.data.image_url;
        $('.gifContainer').append("<img src=" + gifpic + "></img>");
        console.log(gifpic);
      });
      }else{
        console.log(input);
        $.get("http://api.giphy.com/v1/gifs/search?q="+ input + "&api_key=dc6zaTOxFJmzC")
        .then(function(response){
          var gif = response.data;
          var gifpic = response.data[0].images.downsized_large.url;
  $('.gifContainer').append("<img src=" + gifpic + "></img>");
  console.log(response);
  console.log(gifpic);
      });
    };
  });
});
