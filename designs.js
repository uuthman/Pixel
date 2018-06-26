$(document).ready(function(){  
    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
        // Select size input
        var gridHeight = $('#inputHeight').val();
        var gridWeight = $('#inputWeight').val();

        //get the Design Table id 
        var Canvas = $('#pixelCanvas');

        // Your code goes here!
        for (var r = 0; r < gridHeight; r++) {
            Canvas.append("<tr></tr>");
            for (var c = 0; c < gridWeight; c++) {
                $('tr:last').append("<td></td>");
                $('td').attr("class", 'grid');
            }
        }
        //an event  to color a box when it is clicked
        $('.grid').bind("click",function (event) {
            // Select color input
            var gridColor = $('#colorPicker').val();
            $(event.target).css('background-color', gridColor);           
        });
    }

   //event to make the grid afte the row and col has been submitted
    $('form').submit(function (event) {
        $('table tr').remove();
        event.preventDefault();
        makeGrid();
    });
});





