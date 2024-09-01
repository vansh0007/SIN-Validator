/**
 * Validate a Canadian Social Insurance Number (SIN).
 *
 * @param {string} sin A string containing the SIN to validate.
 * @returns {{ isValid: boolean; message: string }}
 */
export function validateSIN(sin: string): { isValid: boolean; message: string } {
  // Remove any non-digit characters
  const cleanSIN = sin.replace(/\D/g, '');

  // Check digit count
  if (cleanSIN.length !== 9) {
    return {
      isValid: false,
      message: "SIN must be exactly 9 digits. The provided SIN has " +
        cleanSIN.length +
        " digits.",
    };
  }

  // Apply Luhn algorithm
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let digit = parseInt(cleanSIN[i]);
    // Double every second digit
    if (i % 2 !== 0) {
      digit *= 2;
      // Sum the digits of the doubled number if it is two digits
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  // Check if the total sum is divisible by 10
  if (sum % 10 === 0) {
    return { isValid: true, message: "Valid SIN." };
  } else {
    return {
      isValid: false,
      message: "Invalid SIN. Failed Luhn algorithm check. The total sum was " +
        sum +
        ".",
    };
  }
}
  