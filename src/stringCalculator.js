
function add(numbers) {
    //Execute if no numbers are given
    if (numbers === "") return 0;

    // Extract custom delimiter
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2));  
      numbers = parts[1];
    }

    // Extract numbers
    const parts = numbers.split(delimiter).map(Number);

    //Check if any nagetive number is there or not
    const negatives = parts.filter(n => n < 0);
    if (negatives.length) {
      throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    // Sum the numbers
    return parts.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  