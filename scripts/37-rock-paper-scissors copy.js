//  using add event listener instead of onclick
//  using add event listener  for event 'keydown' when key is pressed.
//  r= rock p=paper s=scissor

 
 let scoreTrack=JSON.parse(localStorage.getItem('scoreTrack'))||{ Win:0,
      Lose:0,
      Tie:0 }; 
    

    updateScoreElement();


let isAutoPlaying=false
let intervalId;
function autoPlay(){

if(!isAutoPlaying)
{

  intervalId=setInterval(function(){
   let playerMove=pickComputerMove()
    playGame(playerMove)
  },1000);
  isAutoPlaying=true;
}

else
  {
clearInterval(intervalId);
isAutoPlaying=false;
}
}

document.querySelector('.js-rock-button')
.addEventListener('click',()=>{
  
      playGame('rock');  

})

document.querySelector('.js-paper-button')
.addEventListener('click',()=>{
  
      playGame('paper');  

})


document.querySelector('.js-scissor-button')
.addEventListener('click',()=>{
  
      playGame('Scissor');  

})
document.querySelector('.js-reset-btn')
.addEventListener('click',()=>{
  scoreTrack.Win=0;
  scoreTrack.Lose=0;
  scoreTrack.Tie=0;
  localStorage.removeItem('scoreTrack');
  updateScoreElement(); 

})
document.querySelector('.js-autoPlay')
.addEventListener('click',autoPlay);
// .addEventListener('click',()=>{autoPlay()});


document.body.addEventListener('keydown',(event)=>{ // addeventlistener also provide event object
  if(event.key==='r'){


      playGame('rock');  
  }
  else if(event.key==='s'){
      playGame('Scissor'); 
  }
  else if(event.key==='p'){
     playGame('paper');  
  }
  
})
     function playGame(playerMove){
       const computerMove=pickComputerMove();
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


     function pickComputerMove(){
      let computerMove=''; 
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
      return computerMove;
    }

// we need to put ananomous function or arrow function inside of adevent listener because if i put direct function . it  runs automatically when page loads. not when button is clicked because of paranthesis. eg:autoplay() . so either if put autoplay or add arrow function