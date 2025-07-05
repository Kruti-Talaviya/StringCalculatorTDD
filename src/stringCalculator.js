
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
    const parts = numbers.split(delimiter);

    // Sum the numbers
    return parts.reduce((sum,num)=>sum + parseInt(num),0);
  }
  
  module.exports = { add };
  