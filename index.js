function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

function nowServing(katzDeliLine){
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return katzDeliLine.shift();
  }
  
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    String message = "The line is currently: ";
    
    for(let i = 0; i < katzDeliLine.length; i++){
      message += `${i+1}. ${katzDeliLine[i]}, `;
    }
    return message.slice(0, katzDeliLine.length-1);
    
  }
}