$(document).ready(function(){

    function printRect(){
        $("#output").empty();
        var row = $("#inputa").val();
        var col = $("#inputb").val();
        for(var i = 0; i<row; i++){
            for (var j = 0; j<col; j++){
                $('#output').append("8");
            }
            $('#output').append("<br>");
        }
    }

    function printTri(){
        $("#output").empty();
        var row = $("#inputa").val();
        var col = $("#inputb").val();
        for (var i = 0; i < row; i++){
            for (var j = 0; j < i+1; j++){
                $('#output').append("8");
            }
            $('#output').append("<br>");
        }
    }

    $("#draw").on("click", draw);
    $(".triggera").on("change", draw);
    $(".triggerb").on("input", draw);
    
    function draw(){
        var shape = $("#shapeSelect").val();
        switch(shape){
            case "0":
            printRect();
            break;
            case "1":
            printTri();
            break;
        };
    }

});