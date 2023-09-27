function printMultiplicationTable(number) {
    if (number <= 0) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }
  
  // Example usage:
  printMultiplicationTable(5);

