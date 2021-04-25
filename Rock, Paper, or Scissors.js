const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput!=='rock' && userInput!=='scissors' && userInput!='paper' && userInput!='bomb')
  console.log('Error input!');
  else
  return userInput;
}
const getComputerChoice = ()=>{
  choice=Math.floor(Math.random()*3);
  if(choice===1)
  return 'rock';
  else if(choice===2)
  return 'paper';
  else
  return 'scissors';
}
function determineWinner(userChoice,computerChoice){
  if(userChoice==computerChoice)
  return 'Tie';
  else if(userChoice=='rock'){
    if(computerChoice=='paper')
    return 'Computer won';
    else
    return 'User won';
  }
  else if(userChoice=='paper'){
    if(computerChoice=='scissors')
    return 'Computer won';
    else
    return 'User won';
  }
  else if(userChoice=='scissors'){
    if(computerChoice=='rock')
    return 'Computer won';
    else
    return 'User won';
  }else if(userChoice=='bomb')
  return 'User won';
}
function playGame(){
  userChoice=getUserChoice('bomb');
  computerChoice=getComputerChoice();
  console.log('UserChoice: '+userChoice);
  console.log('ComputerChoice '+computerChoice );
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
