/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
        var dogPoints;
        var catPoints;
        
        
        if(name.equals("Dark Colors") || name.equals("dark colors"))
        {
            catPoints = catPoints + 1;
        }
        else
        {
            dogPoints = dogPoints + 1;
        }
        
        if(q1Result.equals("Indoor") || q1Result.equals("dark colors"))
        {
            catPoints = catPoints + 1;
        }
        else
        {
            dogPoints = dogPoints + 1;
        }
        
        if(q2Result.equals("Yes") || q2Result.equals("yes"))
        {
            dogPoints = dogPoints + 1;
        }
        else if(q2Result.equals("No") || q2Result.equals("no"))
        {
            dogPoints = dogPoints - 1;
            catPoints = catPoints - 1;
        }
        else
        {
            catPoints = catPoints + 1;
        }
        
        if(q3Result.equals("Friends") || q3Result.equals("friends"))
        {
            dogPoints = dogPoints - 1;
            catPoints = catPoints - 1;
        }
        else
        {
            catPoints = catPoints + 1;
            dogPoints = dogPoints + 1; 
        }
        
        $().
    });

});
