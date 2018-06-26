$(document).ready(function(){

    $('button').on('click', function(){
        var animal = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=nEDH42H82ewGPJ36jGvvmgoBM8Z59yaK&limit=10";

        $.ajax({
            url:queryURL,
            method: "GET"
        })
        .done(function(response) {

            consoe.log(response)
            
            var results = response.data;

            for (var i=0; i<results.length; i++ ) {

                var animalDiv = $("<div/>");

                var p = $("<p/>");

                p.text(results[i].rating);

                var animalImage = $("<img>/");

                animalImage.addClass('anImg');

                animalImage.attr("src", results[i].images.fixed_height.url)

                animalImage.attr("data-still", results[i].images.fixed_height_still.url)

                animalIMage.attr("data-animate", results[i].images.fixed_height.url)

                .attr("data-state", "still")

                animalDiv.append(p);

                animalDiv.append(animalImage);

                animalDiv.prependTo($('#gifs'));

            }

            $(".anImg").on("click", function() {

                var state = $(this).attr('data-state');
                console.log(this);

                if (state == 'still') {

                    $(this).attr('src', $(this).data('animate'));

                    $(this).attr('data-state', 'animate');

                } else {
                    $(this).attr('src', $(this).data('still'));

                    $(this).attr('data-state', 'still');
                }
            });
        });
    });

    var animals = [''];

    // Adding buttons
    $("#theButton").on("click", function() {
        var animalButton = $("#gif-input").val();

        var newButton = $("<button/>").addClass("btn btn-info animal").attr("data-name", animalButton).hmtl(animalButton).css({"margin": "5px"});

        $("#animalsbuttons").append(newButton);
        console.log("This works!");

        queryURL = "https://api.giphy.com/v1/gifs/search?q" + animalButton + "&api_key=nEDH42H82ewGPJ36jGvvmgoBM8Z59yaK&limit=10";
        console.log(animalButton);

        $.ajax({
            url:queryURL,
            method: "GET"
        })

        .done(function(response) {
            var resultes = response.data;
                for (var i=0; i<results.length; i++) {

                    var animalDiv = $("<div/>");

                    var p=$("<p/>");

                    p.text(result[i].rating);

                    var animalImage = $("<img/>");

                    animalImage.addClass('anImg')

                    animalImage.attr('src', result[i].images.fixed_height_still.url);

                    animalImage.attr('data-still', result[i].images.fixed_height_still.url)

                    animalImage.attr('data-animate', result[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    animalDiv.append(p);

                    animalDiv.append(animalImage);

                    animalDiv.prependTo($("#gifs"));


                }

                $('.anImg').on("click", function(){
                    var state = $(this).attr("data-state");
                    console.log(this);

                    if (state == 'still') {
                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {
                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }
                });
        });

        $("#gif-input").val("");
        return false;
    })
})
