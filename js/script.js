


    
    $('#go').click(function() {
        
        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if( complete === false ) {
                complete = true;
            } else {
                place = 'second';
            }
            
        }
        
    
        var car_width = $('#car1').width();
        
        
        var raceTrackWidth = $(window).width() - car_width;
        
       
        
        var wakt1 = Math.floor( (Math.random() * 5000) + 1 );
        var wakt2 = Math.floor( (Math.random() * 5000) + 1 );
        
        
        var complete = false;
        
        
        var place = 'first';
        
        // animate car 1
        $('#car1').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, wakt1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + wakt1 + ' milliseconds!' );
            
        });
        
        // animate car 2
        $('#car2').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, wakt2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + wakt2 + ' milliseconds!' );
            
        });
        
    });
    
   
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
    











