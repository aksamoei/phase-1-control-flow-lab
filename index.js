function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if (distance <= 400) {
    message = "This one is on me!";
  }
  else if (distance <= 2000) {
    message = "That will be twenty bucks.";
  }
  else if (distance <= 2500) {
    message = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500) {
    message = "No can do.";
  }
  return message
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let gratitude;
  switch (tip) {
    case "generous":
      gratitude = "Thank you so much.";
      break;
    case "not as generous":
      gratitude = "Thank you.";
      break;
    default:
      gratitude = "Bye.";
  }
  return gratitude;
}


