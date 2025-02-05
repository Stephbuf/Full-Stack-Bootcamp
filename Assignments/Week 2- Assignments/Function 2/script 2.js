//write a function that takes a list of numbers and returns the maximum element in that list

function maxNumber() {
    let numbers = [5, 20, 8, 36, 105, 32, 88, 95, 65];
    let max = numbers[0];
      
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    console.log(max);
  }
 
  maxNumber();

  