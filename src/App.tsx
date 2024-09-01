import React from 'react';
import SINValidator from '../src/components/SINValidator.tsx';
import './App.css';

/**
 * The App component renders the SINValidator component.
 *
 * @returns {JSX.Element} A JSX element representing the App component.
 */
function App(): JSX.Element {
  return (
    <div className="App">
      {/* The SINValidator component renders a form to validate a Social Insurance Number (SIN). */}
      <SINValidator />
    </div>
  );
}

export default App;
