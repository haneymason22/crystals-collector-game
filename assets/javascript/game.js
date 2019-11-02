$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
    $("#random-number").html(randomNumber);
    
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#total-score").html(totalScore)

    function win () {
        wins ++;
        $("#wins").html("Wins: " + wins)
        reset();
    }

    function lose () {
        losses++;
        $("#losses").html("Losses: " + losses)
        reset();
    }

    function reset() {
        totalScore = 0;
        $('#total-score').text(totalScore);
        randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("#random-number").html(randomNumber);
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    };

    $("#first-crystal").on("click", function () {
        totalScore = totalScore + crystal1
        $("#total-score").html(totalScore)
        if (totalScore === randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        };
    });

    $("#second-crystal").on("click", function () {
        totalScore = totalScore + crystal2
        $("#total-score").html(totalScore)
        if (totalScore === randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        };
    });

    $("#third-crystal").on("click", function () {
        totalScore = totalScore + crystal3
        $("#total-score").html(totalScore)
        if (totalScore === randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        };
    });

    $("#fourth-crystal").on("click", function () {
        totalScore = totalScore + crystal4
        $("#total-score").html(totalScore)
        if (totalScore === randomNumber) {
            win();
            reset();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
        };
    });

});
