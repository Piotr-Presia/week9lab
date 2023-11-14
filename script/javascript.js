
function song() {

    var song = "";
    document.getElementById("buttonSong").style.display = "none";

    for (i = 99; i >= 0; i--) {
        if (i > 2) {
            song = song + (i + " bottles of beer on the wall, " + i + " bottles of beer <br>Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall<br><br>");
        }
        else if (i == 2) {
            song = song + (i + " bottles of beer on the wall, " + i + " bottles of beer <br>Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall<br><br>");
        }
        else if (i == 1) {
            song = song + (i + " bottle of beer on the wall, " + i + " bottle of beer <br>Take one down and pass it around, no more bottles of beer on the wall<br><br>");
        } else if (i == 0) {
            song = song + ("No more bottles of beer on the wall, no more bottle of beer <br>Go to the store and buy some more, 99 bottles of beer on the wall<br><br>");
        }
    }

    document.getElementById("song").innerHTML = song;
}