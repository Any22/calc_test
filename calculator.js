
const add = (x, y) => {
    return x + y;
  };
  
  const subtract = (x, y) => {
    return x - y;
  };
  
  const multiply = (x, y) => {
    return x * y;
  };
  
  const divide = (x, y) => {
    if (y===0){
     return('infinity');
    }
     else {
      return x / y;
     } 
    
  };

const clearAllfields = () => {
   return 0;
  }   
  
 
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    clearAllfields
  };