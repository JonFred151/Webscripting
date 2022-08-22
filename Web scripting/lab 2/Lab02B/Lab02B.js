var secret = 0;
var guesses = 0;

secret = Math.floor(Math.random() * 100) + 1; //randomize the number 
console.log("Secret: " + secret); // diagnostic print; for testing only

function onClick() {
        guesses = document.getElementById("guess").value;//gets the number from the user
        
        
       if(guesses <= -1 || guesses >= 101) //see if the number is in range
       {

        document.getElementById("output").innerHTML = "enter a number in the range of 1-100"
      
    
    }
    else {
          for(i=0; i<100;i++)
        {   
            if(guesses == secret )
            {
                document.getElementById("output").innerHTML = guesses +  " " + " Was the correct number!";  //correct
                break;
            }
            else
            {
                if(guesses > secret)
                {
                    document.getElementById("output").innerHTML =  "try again! The number was too high."; //too high
                    guesses = document.getElementById("guess");

                   
                }
                else if(guesses < secret){

                     document.getElementById("output").innerHTML = " try again! The number was too low."; //too low
                    guesses = document.getElementById("guess");
                }
    
            }
            
        }
    }
}

function validate(x) {

    var result = false;
    var x ;
    if(x > 0 || x < 100 )
    {
      result = true;   
    }
    else 
    {
      result = false;
    }
    

    return result;

}