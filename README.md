# SIN-Validator
Validates the SIN Number

This project is a Social Insurance Number (SIN) validator implemented in TypeScript with a React web interface.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sin-validator.git
   cd sin-validator
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

This will start the application on `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.


## Assumptions and Approach

1. The SIN is validated based on two criteria:
   - It must be exactly 9 digits long.
   - It must pass the Luhn algorithm check and checksum check.

2. The validator accepts input with non-digit characters (like spaces or dashes) but removes them before validation.

3. The web interface provides real-time feedback as the user types or clicks the validate button.

4. The application uses React for the UI and Vite for the build process, providing a modern and efficient development experience.

5. The core validation logic is separated from the UI component, allowing for easy testing and potential reuse in other parts of the application.

## Logic Explanation

The SIN validation follows these steps:

1. Remove any non-digit characters from the input.
2. Check if the cleaned input is exactly 9 digits long.
3. Apply the Luhn algorithm:
   - Starting from the rightmost digit, double every second digit.
   - If doubling results in a two-digit number, sum those digits.
   - Sum all the digits (both doubled and undoubled).
   - If the total sum is divisible by 10, the SIN is valid.

This approach ensures that the SIN meets the standard requirements for Canadian Social Insurance Numbers.
