const game = () => {
    let pScore = 0; //Player Score
    let cScore = 0; //Computer Score

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch=()=>{
        const options = document.querySelectorAll(".options button");        
        const playerHand = document.querySelector(".player-hand");        
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hand img");

        hands.forEach(hand => {
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            });
        });
        //Computer options
        const computerOptions = ["rock","paper","scissors"];
        
        options.forEach(options=>{
            options.addEventListener("click",function(){
                //computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                //here we call function
               setTimeout(()=>{
                compareHands(this.textContent,computerChoice);
                //update images
                playerHand.src =`./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            },2000);
                
                //Animations
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            
            });
        });
    };


    const updateScore = ()=>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if(playerChoice===computerChoice){
            winner.textContent = "It's a tie ";
            return;
        }
        //check for rock
        if (playerChoice==="rock"){
            if(computerChoice==="scissors"){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return; 
            }
            else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice==="paper"){
            if(computerChoice==="rock"){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return; 
            }
            else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors 
        if (playerChoice==="scissors"){
            if(computerChoice==="paper"){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return; 
            }
            else{
                winner.textContent="Computer wins";
                cScore++; 
                updateScore();
                return;
            }
        }
      }
    //Call all the inner functions
    startGame();
    playMatch();
};
game(); // Start the game