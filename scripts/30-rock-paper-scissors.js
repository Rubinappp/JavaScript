 let scoreTrack=JSON.parse(localStorage.getItem('scoreTrack'))||{ Win:0,
      Lose:0,
      Tie:0 }; 
    


    updateScoreElement();


     function playGame(playerMove){
          let result='';
          if(playerMove==='Scissor'){
            if (computerMove==='rock'){
              result='You lose.';
              }              
            if (computerMove==='Scissor'){
              result='Tie.';
            
            }
            if (computerMove==='paper'){
              result='You win.';
            
            }
            
             }
          
          else if(playerMove==='rock'){
            
            if (computerMove==='rock'){
              result='Tie.';
              
            }
            if (computerMove==='Scissor'){
              result='You win.';
              
              
            }
            if (computerMove==='paper'){
              result='You lose.';  }

          }

          else if(playerMove=='paper'){
              
            if (computerMove=='rock'){
              result='You win.';
              
            }
            if (computerMove=='Scissor'){
              result='You lose.';
            
            }
            if (computerMove=='paper'){
              result='Tie.';
            
            }
           }

            if(result==='You win.'){
               scoreTrack.Win+=1;
            }
            else if(result==='You lose.'){
                 scoreTrack.Lose+=1;
            }
            else if (result==='Tie.'){
                 scoreTrack.Tie+=1;
            }
              
          localStorage.setItem('scoreTrack',JSON.stringify(scoreTrack)); 
          
          updateScoreElement();
       
document.querySelector('.js-result').innerHTML=`${result}`
document.querySelector('.js-move').innerHTML=`You 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png"class="move-icon"> 
    Computer `

        
        }

       function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Win:${scoreTrack.Win} Losses:${scoreTrack.Lose},Ties:${scoreTrack.Tie}`
       }


     let computerMove=''; //Global variable
     function pickComputerMove(){
      const randomNumber=Math.random();
     
      if(randomNumber>=0 && randomNumber<1/3){
      computerMove='rock';
      }
      
      else if(randomNumber>=1/3 && randomNumber<2/3)
      {computerMove='paper';

      }
      else if(randomNumber>=2/3 && randomNumber<=1){
        computerMove='Scissor';
      }
 
    }
  
 