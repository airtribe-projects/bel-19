function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result;         // One line, 2 statments 
  } else {  
    // Two lines but one statement
    result = (a * b) +                             
    (a - b);
  }
  return result; 
}