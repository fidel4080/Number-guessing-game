const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const output = document.getElementById("output");
const button = document.getElementById("button");

let attempts = 0;
let running = true;



button.onclick = function(){
  while(running){
     
    guess = document.getElementById("guess").value;
    guess = Number(guess);

    if(isNaN(guess)){
      output.textContent = "Please enter a valid number";
      output.style.colour = "red";
    }

    else if(guess < minNum || guess > maxNum){
      output.textContent = (`Only numbers between ${minNum} and ${maxNum} are allowed!`);
      output.style.colour = "red";
    }

    else{
      attempts++ ;

      if(guess < answer){
         output.textContent = ("TOO LOW! PLEASE TRY ANOTHER GUESS!");
         output.style.colour = "orange";
      }

      else if(guess > answer){
         output.textContent = ("TOO HIGH! PLEASE TRY ANOTHER GUESS!");
         output.style.colour = "yellow";
      }

      else{
         output.textContent = (`CORRECT!! The answer was ${answer}. You took ${attempts} attempts`);
         output.style.colour = "green";
      }
    }
  }
}
