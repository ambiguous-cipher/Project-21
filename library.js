//the collided function
function collided(object1, object2){
  if (object1.x - object2.x <= object2.width/2 + object1.width/2){
    if (damage <= 10){
      return true;
    } else {
      return false;
    }  
  }
}