let score=JSON.parse(localStorage.getItem('score')) || {
    won:0,
    losses:0,
    ties:0
};

updateScoreElement();


function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
    if(playerMove==='Rock'){ 
    if(computerMove==='rock'){
        result='Tie';
    }
    else if(computerMove==='Paper'){
        result='You lose';
    }
    else if(computerMove==='Scissors'){
        result='You win';
    }
    }
    else if(playerMove==='Paper'){
        if(computerMove==='rock'){
            result='You win';
        }
        else if(computerMove==='Paper'){
            result='Tie';
        }
        else if(computerMove==='Scissors'){
            result='You lose';
        }
    }
    else if(playerMove==='Scissors'){
        if(computerMove==='rock'){
            result='You lose';
        }
        else if(computerMove==='Paper'){
            result='You win';
        }
        else if(computerMove==='Scissors'){
            result='Tie';
        }
    }
    if(result==='You win'){
        score.won+=1;
    }
    else if(result==='You lose'){
        score.losses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML=result;
   document.querySelector('.js-move').innerHTML=` You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}


function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML=`Won:${score.won},losses:${score.losses},ties:${score.ties}`;
}

function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';

    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper';
    }
    else if (randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissors';
    }
        return computerMove;
        }