import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Resetting some default browser styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5; /* Light gray background color */
    color: #333; /* Dark text color for readability */
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none; /* Removing underline from links */
    color: inherit; /* Link color inherits from its parent element */
  }

  button {
    cursor: pointer; /* Changing cursor to indicate button action */
    border: none; /* Remove border from button */
    background-color: transparent; /* Transparent background by default */
  }

  /* Styling for the container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Custom scroll bar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* Add some responsiveness to the app */
  @media (max-width: 768px) {
    body {
      font-size: 14px; /* Adjust font size for smaller screens */
    }
  }
`;

export default GlobalStyle;
