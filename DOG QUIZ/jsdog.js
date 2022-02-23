  //Next question script//

  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });

//Result script//
<script>
document.getElementById("form1").onsubmit=function() {
       dog = parseInt(document.querySelector('input[name = "dog"]:checked').value);
       family = parseInt(document.querySelector('input[name = "family"]:checked').value);
       furniture = parseInt(document.querySelector('input[name = "furniture"]:checked').value);
       arrangements = parseInt(document.querySelector('input[name = "arrangements"]:checked').value);
       patience = parseInt(document.querySelector('input[name = "patience"]:checked').value);
       week = parseInt(document.querySelector('input[name = "week"]:checked').value);
       yellow = parseInt(document.querySelector('input[name = "yellow"]:checked').value);
       money = parseInt(document.querySelector('input[name = "money"]:checked').value);
       training = parseInt(document.querySelector('input[name = "training"]:checked').value);
       next = parseInt(document.querySelector('input[name = "next"]:checked').value);


       result = dog + family + furniture + arrangements + patience + week + yellow + money + training + next ;

    document.getElementById("grade").innerHTML = result;



return false; // required to not refresh the page; just leave this here
}

</script>
