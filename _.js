// object represents our library containing all the functionality we add to it.
const _ = {
  // Clamps number within the inclusive lower and upper bounds.
  clamp(number, lowerBound, upperBound) {
    let lowerClampedValue = Math.max(number, lowerBound);
    let clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
  // inRange() checks to see if the provided number falls within the range specified by the start and end values
  inRange(number, start, end) {
    // check if no end value provided
    if (end === null || end === undefined) {
      end = start;
      start = 0;
    }
    // check if  start > end value
    if (start > end) {
      let temp;
      temp = end;
      end = start;
      start = temp;
    }
    // check if number is in the range
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  words(str) {
    return str.split(" ");
  },
  pad(str, len) {
    if (str.length >= len) {
      return str;
    } else {
      let startPaddingLength = Math.floor((len - str.length) / 2);
      let endPaddingLength = len - str.length - startPaddingLength;
      let paddedString = " ";
      let resultString =
        paddedString.repeat(startPaddingLength) +
        str +
        paddedString.repeat(endPaddingLength);
      return resultString;
    }
  },
  has(object, key) {
    let hasValue = key in object;
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (const key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicateFunction) {
    for (const key in object) {
      let value = object[key];
      let predicateReturnValue = predicateFunction(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, number) {
    if (number === null || number === undefined) {
      number = 1;
    }
    let droppedArray = array.slice(number);
    return droppedArray;
  },
  dropWhile(array, predicateFunction) {
    let dropNumber = array.findIndex((ele, index) => {
      return !predicateFunction(ele, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    if (size === null || size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
