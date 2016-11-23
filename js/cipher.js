$(document).ready(function () {
    $("h1").click(function () {
        var answer1 = prompt("Enter a Sentence");
        var firstCap = answer1.charAt(0).toUpperCase();
        var lastCap = answer1.charAt(answer1.length - 1).toUpperCase();
        var firstOutput = (firstCap + lastCap);
        var secondOutput = (lastCap + firstCap);
        var thirdOutput = ((firstOutput) + (secondOutput));


        alert(firstOutput);
        alert(secondOutput);
        alert(thirdOutput);



    });
});
