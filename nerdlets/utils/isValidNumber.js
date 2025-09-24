// Utils
import isNumber from "./isNumber";

/**
 * Validate if is valid number
 * @param {number} num Number
 * @returns {boolean} Boolean
 */
export default function isValidNumber(num) {
  return isNumber(num) && !isNaN(num);
}
