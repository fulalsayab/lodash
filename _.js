// object represents our library containing all the functionality we add to it.
const _ = {
  // Clamps number within the inclusive lower and upper bounds.
  clamp(number, lowerBound, upperBound) {
    let lowerClampedValue = Math.max(number, lowerBound);
    let clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
};

// Do not write or modify code below this line.
module.exports = _;

