// object represents our library containing all the functionality we add to it.
const _ = {
  // Clamps number within the inclusive lower and upper bounds.
    clamp(number, lowerBound, upperBound) {
        // cheacking if the lowerBound > upperBound
        if (lowerBound > upperBound) {
            let temp;
            temp = lowerBound;
            lowerBound = upperBound;
            upperBound = temp;        
        }
      // If number < lower bound, return the lower bound as the final number
      if (number < lowerBound) {
        number = lowerBound;
        return number;
      } else if (number > upperBound) { // If number > upper bound, return the upper bound as the final number
          number = upperBound;
          return number;
      } else {
          return number;
      }
    },
    
};






// Do not write or modify code below this line.
module.exports = _;