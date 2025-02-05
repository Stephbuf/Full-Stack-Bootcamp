//write a function that takes a list and returns the average of that list

function averageNumbers() {
    let numbers = [5, 20, 8, 36, 48, 32, 88, 95];
    let sum = 0;
      
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    let average = sum / numbers.length;
  
    console.log("The average is: " + average);
  }
 
  averageNumbers();
  