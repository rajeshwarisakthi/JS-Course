let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElelment(); 

      let isAutoPlaying=false;
      let intervalId;

      function autoPlay(){
        if(!isAutoPlaying){
          intervalId = setInterval(()=>{
          const playerMove=pickComputerMove();
          playGame(playerMove);
        },1000);
        isAutoPlaying=true;
        }
        else{
          clearInterval(intervalId);
          isAutoPlaying=false;
        }
      }

      function playGame(playerMove){
        computerMove=pickComputerMove();

        result='';
        if(playerMove==='Scissors'){
          if(computerMove==='Rock'){
          console.log('You Lose');
          result='You Lose';
          }
          else if(computerMove==='Paper'){
          console.log('You Win!');
          result='You Win!';}
          else if(computerMove==='Scissors'){
          console.log('Tie');
          result='Tie';}
          if(result==='You Win!'){
            score.wins+=1;
          }
          else if(result==='You Lose'){
            score.losses+=1;
          }
          else if(result==='Tie'){
            score.ties+=1;
          }


          
        }
        else if(playerMove==='Paper'){
          if(computerMove==='Rock'){
          console.log('You Win!');
          result='You Win!';
          }
          else if(computerMove==='Paper'){
          console.log('Tie');
          result='Tie';}
          else if(computerMove==='Scissors'){
          console.log('You Lose');
          result='You Lose';}
          if(result==='You Win!'){
            score.wins+=1;
          }
          else if(result==='You Lose'){
            score.losses+=1;
          }
          else if(result==='Tie'){
            score.ties+=1;
          }


          
        }
        else if(playerMove==='Rock'){
          computerMove= pickComputerMove();
          result='';
          if(computerMove==='Rock'){
          result='Tie';
          console.log('Tie');
          }
          else if(computerMove==='Paper'){
          console.log('You Lose.');
          result='You Lose';}
          else if(computerMove==='Scissors'){
          console.log('You win!.');
          result='You Win!';}
          }
          if(result==='You Win!'){
            score.wins+=1;
          }
          else if(result==='You Lose.'){
            score.losses+=1;
          }
          else if(result==='Tie'){
            score.ties+=1;
          }

          localStorage.setItem('score',JSON.stringify(score));

          updateScoreElement();

          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}_emoji.jpg"  class="move-icon"> <img src="images/${computerMove}_emoji.jpg"  class="move-icon"> Computer`;

        
        }

        function updateScoreElement(){
          document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.ties}`; 
        }
      function pickComputerMove(){
        const randomNumber=Math.random();
        let computerMove='';
        if (randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock'}
        else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper'}
        else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissors'}

        return computerMove;
    }