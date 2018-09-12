$(document).ready(function ()
{

    //$("#btnClear").click(function () {
    //    $("#num1, #num2, #num3, #num4, #num5").val("");
    //    $("#output1, #output2, #output3, #output4, #output5").html("");
    //});

    //$("#btnClearPal").click(function () {
    //    $("#PalindromeWord").val("");
    //});

    //$("#btnClearFact").click(function () {
    //    $("#FactorialNumber").val("");
    //});

    //$("#btnClearBuzz").click(function () {
    //    $("#BuzzNum").val("");
    //});

    //$("#btnClearFizz").click(function () {
    //    $("#FizzNum").val("");
    //});

    $("#btnClear").click(function () {
        $("#num1, #num2, #num3, #num4, #num5").val("");
        $("#output1, #output2, #output3, #output4, #output5").val("");
        $("#btnShowMathCode").hide("");
        $("#PalindromeWord").text("");
        $("#palout").text("");
        $("#btnShowPalCode").hide("");
        $("#FactorialNumber").val("");
        $("#factout").val("");
        $("#btnShowFactCode").hide("");
        $("FizzNum").val("");
        $("BuzzNum").val("");
        $("FizzBuzzOut").text("");
        $("#btnShowFizzBuzzCode").hide("");

    });

    $("#btnCalc").click(function () {

        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();
        var num5 = $("#num5").val();

        if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "")
        {
            swal("Please Enter a Number in All Boxes")
        }
        else
        {
            var sum = num1 + num2 + num3 + num4 + num5;
            var product = num1 * num2 * num3 * num4 * num5;
            var mean = sum / 5;
            var min = Math.min(num1, num2, num3, num4, num5);
            var max = Math.max(num1, num2, num3, num4, num5);

            $("#output1").text("The <b>sum</b> of your numbers is <b>" + sum + "</b>");
            $("#output2").text("The <b>product</b> of your numbers is <b>" + product + "</b>");
            $("#output3").text("The <b>mean</b> of your numbers is <b>" + mean + "</b>");
            $("#output4").text("The <b>minimum</b> number entered is <b>" + min + "</b>");
            $("#output5").text("The <b>maximum</b> number entered is <b>" + max + "</b>");
        }
    });

    $("#btnPal").click(function ()
    {
        var word = $("#PalindromeWord").val();
        var revWord = "";

        if (word === "")
        {
            swal("Please Enter a Word");
        }
        else
        {
            for (var count = word.length - 1; count >= 0; count--)
            {
                revWord = revWord + word.charAt(count);
            }
            if (word.toUpperCase() === revWord.toUpperCase()) {
                $("#palout").text("your word, " + word + " is a palindrome");
                //swal(word + " is a palindrome");
            }
            else {
                $("#palout").text("your word, " + word + " is not a palindrome");
                //swal(word +  " is not a palindrome");
            }            
        }
    });

    $("#btnFact").click(function ()
    {
        var Fact = $("#FactorialNumber").val();
        var factfinal = 1;


        if (Fact < 2 || Fact === "")
        {
            swal("Please Enter a Number Greater than 1");
        }
        else
        {
            for (i = Fact; i > 1; i--)
            {
                factfinal *= i;
            }
            $("#factout").text("<b>" + factfinal + "</b>");
        }
    });

    $("#btnFB").click(function () {

        var FizzNum = $("#FizzNum").val();
        var BuzzNum = $("#BuzzNum").val();

        if (FizzNum < 0 || FizzNum > 100 || BuzzNum < 0 || BuzzNum > 100)
        {
            swal("Please Enter 2 Numbers in the Number Boxes that are Greater than 0 and less than 100")
        }
        else
        {
            var outputArray = []
            var loop = 1

            for (var loop = 1; loop <= 100; loop++) {
                if (loop % FizzNum === 0 && loop % BuzzNum === 0) {
                    outputArray.push("FizzBuzz");
                }
                else
                    if (loop % FizzNum === 0) {
                        outputArray.push("Fizz");
                    }
                    else
                        if (loop % BuzzNum === 0) {
                            outputArray.push("Buzz")
                        }
                        else {
                            outputArray.push(loop);
                        }
            }
            $("#FizzBuzzOut").text(outputArray.join(", "));
        }
    });

    $("#btnShowMathCode").click(function () {
        $("#MathCode").toggle();
        if ($(this).text().indexOf("ShowCode") >= 0) {
            $("#btnShowMathCode").html("HideCode <i class='fa fa-caret-up' />");
        }
        else {
            $("#btnShowMathCode").html("ShowCode <i class='fa fa-caret-down' />");
        }
    });

    $("#btnShowPalCode").click(function () {
        $("#PalCode").toggle();
        if ($(this).text().indexOf("ShowCode") >= 0) {
            $("#btnShowPalCode").html("HideCode <i class='fa fa-caret-up' />");
        }
        else {
            $("#btnShowPalCode").html("ShowCode <i class='fa fa-caret-down' />");
        }
    });

    $("#btnShowFactCode").click(function () {
        $("#FactCode").toggle();
        if ($(this).text().indexOf("ShowCode") >= 0) {
            $("#btnShowFactCode").html("HideCode <i class='fa fa-caret-up' />");
        }
        else {
            $("#btnShowFactCode").html("ShowCode <i class='fa fa-caret-down' />");
        }
    });

    $("#btnShowFizzBuzzCode").click(function () {
        $("#FizzBuzzCode").toggle();
        if ($(this).text().indexOf("ShowCode") >= 0) {
            $("#btnShowFizzBuzzCode").html("HideCode <i class='fa fa-caret-up' />");
        }
        else {
            $("#btnShowFizzBuzzCode").html("ShowCode <i class='fa fa-caret-down' />");
        }
    });
    
});

    
  