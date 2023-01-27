



$('#go').click(function () {


    // build a function that checks to see if a car has won the race
    function checkIfComplete() {

        if (complete === false) {
            complete = true;
        } else {
            place = 'second';
        }

    }


    var car_width = $('#car1').width();


    var raceTrackWidth = $(window).width() - car_width;



    var wakt1 = Math.floor((Math.random() * 5000) + 1);
    var wakt2 = Math.floor((Math.random() * 5000) + 1);


    var complete = false;


    var place = 'first';


    $('#car1').animate({

        // move the car width of the racetrack
        left: raceTrackWidth

    }, wakt1, function () {
        checkIfComplete();


        $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + wakt1 + ' milliseconds!');

    });


    $('#car2').animate({

        // move the car width of the racetrack
        left: raceTrackWidth

    }, wakt2, function () {

        checkIfComplete();


        $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + wakt2 + ' milliseconds!');

    });

});


$('#reset').click(function () {
    $('.car').css('left', '0');
    $('.raceInfo span').text('');
});

/* jqueery for race cars by keys*/
$(document).ready(function () {
    /*var counter = 0 ;*/
    /*var count =0;*/
    $(document).keydown(function (e) {

        var x = $("#car3").css("left");
        if (x === "700px") {

            alert("The yellow ferrari wins")

            $("#car3").css("left", "-20px");
            $("#car4").css("left", "0px");

        }



        switch (e.which) {
            case 37:
                $("#car3").animate(

                    { left: '-=20' });

                break;

            case 39:

                $("#car3").animate(

                    { left: '+=20' });

                break;
        }


    })
    $(document).keyup(function (e) {

        var y = $("#car4").css("left");
        if (y === "700px") {
            alert("The red ferrari wins")
            $("#car4").css("left", "-20px");
            $("#car3").css("left", "0px");
        }
        switch (e.which) {
            case 100:
                $("#car4").animate(

                    { left: '-=20' });

                break;
            case 102:
                $("#car4").animate(
                    { left: '+=20' });

                break;



        }

    })

})


/*

var car_2 = $('#car2').width();
var raceRoadWidth =  $('.road').width();
var car_height=$('#car2').height();
var raceRoadHeight = $('.road').height();
console.log("this is the width of the car_2",car_2)
console.log("this is raceroadwidth",raceRoadWidth)
console.log("this is car height",car_height)
console.log("this is raceroad height",raceRoadHeight)




function check(){
   var car1_travel = car_2 + (counter*40)
   var car2_travel = car_2 + (counter2*40)
   if(car1_travel>car2_travel){
console.log("car1 wins")
   }
   else{
       console.log('car2 wins')
   }
}


*/

/* function check(){
    var x = $("#car3").css("left");
    if(x==="420px"){
        alert("car1 wins")
    }
}*/




