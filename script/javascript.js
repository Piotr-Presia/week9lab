
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

function paperRock(id) {

    var winner = "";
    var userP = "";
    var compP = "";
    var compInput;
    var userInput;

    for (i = 0; i < 3; i++) {
        input(id);
        if (winner == p1) {
            //"PLAYER";
            i = 10;
        }
    }

    //INPUT
    function input(id) {
        userInput = parseInt(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors"));
        if (id == "compute") { //CHECK THE BUTTONS ID
            compInput = (Math.floor(Math.random() * 3) + 1); //PLAY WITH COMPUTER RANDOM CHOICE
            pvc("PLAYER", "COMPUTER");

        } else {
            compInput = parseInt(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors"));
            pvc("PLAYER 1", "PLAYER 2");
        }
    }

    //COMPUTE
    function pvc(p1, p2) {

        this.p1 = p1;
        this.p2 = p2;

        //1. Rock 2. Paper 3. Scissors

        if (userInput == 1) {
            userP = "1 ROCK";
        } else if (userInput == 2) {
            userP = "2 PAPER";
        } else if (userInput == 3) {
            userP = "3 SCISSORS";
        }

        if (compInput == 1) {
            compP = "1 ROCK";
        } else if (compInput == 2) {
            compP = "2 PAPER";
        } else if (compInput == 3) {
            compP = "3 SCISSORS";
        }

        if (compInput == userInput) {
            winner = "DRAW";
            printC(p1, p2);

        } else if (compInput == 1 && userInput == 2) {
            winner = p1;  //"PLAYER";
            printC(p1, p2);

        } else if (compInput == 1 && userInput == 3) {
            winner = p2;  //"COMPUTER";
            printC(p1, p2);

        } else if (compInput == 2 && userInput == 1) {
            winner = p2;  //"COMPUTER";
            printC(p1, p2);

        } else if (compInput == 2 && userInput == 3) {
            winner = p1; //"PLAYER";
            printC(p1, p2);

        } else if (compInput == 3 && userInput == 1) {
            winner = p1;  //"PLAYER";
            printC(p1, p2);

        } else if (compInput == 3 && userInput == 2) {
            winner = p2;  //"COMPUTER";
            printC(p1, p2);

        } else {

            window.alert("RESULT\n\n" +
                p1 + " choice: " + userP + "\n" +
                p2 + " choice: " + compP + "\n\n" +
                "The winner is: " + winner);
        }
    }
    //PRINT THE RESULT
    function printC(p1, p2) {

        window.alert("RESULT\n\n" +
            p1 + " choice: " + userP + "\n" +
            p2 + " choice: " + compP + "\n\n" +
            "The winner is: " + winner);
    }
}

function subjects() {

    //VARIABLES
    var grade = 0;              //GRADE FOR A SUBJECT
    var average = 0;     //AVERAGE FOR ALL SUBJECTS
    var total = 0;        //SUM OF ALL GRADES
    var mark = "";            //ASSIGNED LETTER ACCORDING TO GRADE

    //INPUT
    var numerOfSubjects = prompt("Enter number of subjects taken: ");

    //MAIN LOOP GETS SUM OF GRADES FOR ALL SUBJECT 'TOTAL'
    for (i = 1; i <= numerOfSubjects; i++) {

        grade = prompt("Enter grade for Subject " + i + "\n(0 - 100): ");

        //SIMPLE ERROR CHECKING (ONLY ACCEPTS VALUES FROM 0 TO 100)
        if (grade < 0 || grade > 100) {
            prompt("Wrong number.\nEnter only values from 1 to 100\nTry again");
            i = i - 1;  //COUNTER RESET
        } else {
            total = total + grade;
        }
    }
    // OUR FINAL AVERAGE
    average = total / numerOfSubjects;

    // OUR LETTER GRADE
    mark = compute(average);

    //SOLUTION
    window.alert("Average grade for all subjects: " + average + "\nLetter grade: " + mark);
    document.getElementById("result3").innerHTML = ("Average grade for all subjects: " + average + "\nLetter grade: " + mark);
}

//ASSIGN A LETTER ACCORDING TO AVERAGE 'TOTAL'
// ACCORDING TO https://www.omnicalculator.com/other/grade
function compute(total) {

    if (total <= 60) {
        mark = "F";
    } else if (total > 60 && total <= 69) {
        mark = "D";
    } else if (total > 69 && total <= 79) {
        mark = "C";
    } else if (total > 79 && total <= 90) {
        mark = "B";
    } else if (total > 90 && total <= 100) {
        mark = "A";
    }
    return mark;
}
