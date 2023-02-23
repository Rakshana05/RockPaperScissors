const game = () => {
  let pScore=0;
  let cScore = 0;

  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".page2");
  const open = document.querySelector(".opening");

  const playerScore = document.querySelector(".playerScore");
  const compScore = document.querySelector(".compScore");
  const winner = document.querySelector(".winner h2");

  const pChoice = document.querySelector(".playerChoice");
  const cChoice = document.querySelector(".compChoice");

  // const icons = document.querySelectorAll(".chosen .fa-solid");

  const sec = document.querySelector("section");
  const result = document.querySelector(".box");
  const last = document.querySelector("footer");

  //start the game by changing the page
  const startGame = () => {
    const play = document.querySelector('.playBtn');

    play.addEventListener("click",()=>{
      // console.log("clicked");
      winner.innerText="Start the game";
      introScreen.classList.add("fadeout");
      match.classList.remove("fadeout");
    });
  };

  //Player has to decide
  const choices = document.querySelectorAll('.choice');
  for (let i=0;i<3;i++){
    choices[i].addEventListener("click", function(){
      //player chosen
      let playerChoice = choices[i].id;

      //computer choices
      let compChoice = Math.floor(Math.random()*3);
      compChoice = choices[compChoice].id;

      //upload data
      pChoice.innerText = playerChoice;
      cChoice.innerText = compChoice;

      //deciding winner, update text, update score

      if(playerChoice===compChoice){
        winner.innerText='It is a tie';
      }

      else if(playerChoice==='Rock'){
        if(compChoice==='Paper'){
          winner.innerText = 'Computer Won';
          cScore++;
          compScore.innerText=cScore;
        }else if(compChoice==='Scissors'){
          winner.innerText="Player Won";
          pScore++;
          playerScore.innerText=pScore;
        }
      }

      else if(playerChoice==='Paper'){
        if(compChoice==='Rock'){
          winner.innerText = 'Player Won';
          pScore++;
          playerScore.innerText=pScore;
        }else if(compChoice==='Scissors'){
          winner.innerText="Computer Won";
          cScore++;
          compScore.innerText=cScore;
        }
      }

      else if(playerChoice==='Scissors'){
        if(compChoice==='Paper'){
          winner.innerText = 'Player Won';
          pScore++;
          playerScore.innerText=pScore;
        }else if(compChoice==='Rock'){
          winner.innerText="Computer Won";
          cScore++;
          compScore.innerText=cScore;
        }
      }
    });};

    //restarting the startGame
    let restart = document.querySelector(".restart");
    restart.addEventListener("click",()=>{
      open.classList.remove("fadeout");

      match.classList.add("fadeout");
      introScreen.classList.remove("fadeout");

      last.classList.add("fadeout");
      //assigning scoreto 0
      compScore.innerText=0;
      playerScore.innerText=0;

      winner.innerText = "Click Start";
      pChoice.innerText = "Player";
      cChoice.innerText = "Computer";
    });

    //Finishing the Game
    let finish = document.querySelector(".finish");
    finish.addEventListener("click",()=>{
      open.classList.add("fadeout");
      last.classList.remove("fadeout");
      match.classList.add("fadeout");
      // introScreen.classList.remove("fadeout");

      //finding winner
      if(pScore>cScore){
        result.innerText="Player Won";
      }else if(cScore>pScore){
        result.innerText="Computer Won";
      }else{
        result.innerText="It's a Tie";
      }
      pScore=0;
      cScore = 0;
    });


  startGame(); //click start change page
};

game();
