$(document).ready(function () {

    

    $("#btnClear").click(function () {
        $("#num1, #num2, #num3, #num4, #num5").val("");
        $("#output1, #output2, #output3, #output4, #output5").html("");
    });

    $("#btnClearPal").click(function () {
        $("#PalindromeWord").val("");
        $("#palout").html("");
    });

    $("#btnClearFact").click(function () {
        $("#FactorialNumber").val("");
        $("#factout").html("");
    });

    $(document).ready(function () {
       $('[data-toggle="popover"]').popover();
    });

    //$("#code").hide();

    //$("#jscode").click(function () {
    //    $("#code").toggle();
    // if ($(this).text().indexof(show) > 0
    //$("#btnshowcode").html("hide code <i class= fa fa caret up")
    // else(
    //$("#btnshowcode").html("show code")
    //))
    //}


    //
            //revword = revword.split("").reverse.join()

   


    $("#btnCalc").click(function () {


        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();
        var num5 = $("#num5").val();


        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var mean = sum / 5;
        var min = Math.min(num1, num2, num3, num4, num5);
        var max = Math.max(num1, num2, num3, num4, num5);

        $("#output1").html("The <b>sum</b> of your numbers is <b>" + sum + "</b>");
        $("#output2").html("The <b>product</b> of your numbers is <b>" + product + "</b>");
        $("#output3").html("The <b>mean</b> of your numbers is <b>" + mean + "</b>");
        $("#output4").html("The <b>minimum</b> number entered is <b>" + min + "</b>");
        $("#output5").html("The <b>maximum</b> number entered is <b>" + max + "</b>");
    });

    $("#btnPal").click(function ()
    {
        var word = $("#PalindromeWord").val();
        var revWord = "";
        var count = word.length
        for (count >=0; count--;)
        {
            revWord = revWord+word.charAt(count)
        }
        if (word.toUpperCase() === revWord.toUpperCase())
        {
            //$("#palout").text(word + " is a palindrome");
            alert(word + " is a palindrome");
        }
        else
        {
            //$("#palout").text(word + " is not a palindrome");
            alert(word +  " is not a palindrome");
        }
    });

    $("#btnFact").click(function ()
    {
        var Fact = $("#FactorialNumber").val();
        factfinal = 1;
            for (i = Fact; i >= 1; i--);
            {
                factfinal *= i;
            }
            $("#factout").html("<b>" + factfinal + "</b>");

    });

    
    //$("ShowPalCode").click(function () {
    //        $("ToggleCode").toggle();
    //});



    //show code buttons


    //$(#MathCode).ready(function () {
    //    $("button").click(function () {
    //        $("p").toggle();


    //    });
    //});





});









