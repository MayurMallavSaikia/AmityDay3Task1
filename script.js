//var y = Math.floor(Math.random() * 100 + 1);
var y = 30;  
   
    var guess = 1;
      
    function guessgame(){

   var x = parseInt(document.getElementById("number").value);
   if(x===null || x==="" || x<1 || x>100)
        document.getElementById("result").innerHTML="Please provide a valid input !!";

  else{

  if(x === y)
   {    
       document.getElementById("result").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS";
   }
   else if(x > y) 
   {    
       guess++;
       document.getElementById("result").innerHTML="OOPS SORRY!! TRY A SMALLER NUMBER";
   }
   else if(x < y)
   {
       guess++;
       document.getElementById("result").innerHTML="OOPS SORRY!! TRY A GREATER NUMBER";
   }
}
    }