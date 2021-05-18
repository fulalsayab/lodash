// object represents our library containing all the functionality we add to it.
const _ = {
  // Clamps number within the inclusive lower and upper bounds.
  clamp(number, lowerBound, upperBound) {
        let value = Math.max(number, lowerBound);
        let final = Math.min(value, upperBound);
        return final;
  },
};






// Do not write or modify code below this line.
module.exports = _;