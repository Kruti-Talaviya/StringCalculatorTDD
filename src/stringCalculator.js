
function add(numbers) {
    //Execute if no numbers are given
    if (numbers === "") return 0;

    // Extract custom delimiter
    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
    const dSectionEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, dSectionEnd);
    numbers = numbers.substring(dSectionEnd + 1);

    const matches = delimiterSection.match(/\[(.*?)\]/g);
    if (matches) {
      delimiters = matches.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterSection];
    }
    }
    const escaped = delimiters.map(d =>
    d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    );
    const regex = new RegExp(escaped.join("|"), "g");
    
    // Extract numbers
     const parts = numbers.split(regex).map(Number);

    //Check if any nagetive number is there or not
    const negatives = parts.filter(n => n < 0);
    if (negatives.length) {
      throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    // Sum the numbers
    return parts.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  