import React, { useState } from 'react';
import { validateSIN } from './sinValidator';

/**
 * The SINValidator component renders a form to validate a Social Insurance Number (SIN).
 *
 * When the form is submitted, the component validates the SIN and displays a message
 * indicating whether the SIN is valid or not.
 */
const SINValidator: React.FC = () => {
  const [sin, setSin] = useState('');
  const [result, setResult] = useState<{ isValid: boolean; message: string } | null>(null);

  /**
   * Handles the input change event. Updates the state with the new value and
   * clears any previous error message if the new value contains only digits.
   * @param e The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if the value contains only digits
    if (/^\d*$/.test(value)) {
      setSin(value);
      setResult(null); // Clear any previous error message
    } else {
      setResult({
        isValid: false,
        message: 'Please enter only digits.',
      });
    }
  };

  /**
   * Handles the form submission event. Validates the SIN and displays a message
   * indicating whether the SIN is valid or not.
   */
  const handleValidate = () => {
    setResult(validateSIN(sin));
  };

  return (
    <div className="sin-validator">
      <h1>SIN Validator</h1>
      <input
        type="text"
        value={sin}
        onChange={handleInputChange}
        placeholder="Enter SIN"
      />
      <button onClick={handleValidate} disabled={sin.length === 0}>Validate</button>
      {result && (
        <div className={`result ${result.isValid ? 'valid' : 'invalid'}`}>
          {result.message}
        </div>
      )}
    </div>
  );
};

export default SINValidator;
