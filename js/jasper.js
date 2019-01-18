$( document ).ready(function() {
  openNav();
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.toggleClass("img-thumbnail");
}

function getImages()
{
    var folder = "images/";
    var counter = 0;
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                  counter += 1;
                    $("#mySidenav").append( "<img src='"+ folder + val +"' class='img-thumbnail' alt='' draggable='true' ondragstart='drag(event)' id="+counter+">" );
                } 
            });
        }
    });
}

function getJoke()
{
    $.getJSON('http://api.icndb.com/jokes/random/?exclude=[explicit]&firstName=Jasper&lastName=Digglesworth', function(data) {
        x = data["value"]["joke"];
        $('#result').text(x);
        }, "json");
}

