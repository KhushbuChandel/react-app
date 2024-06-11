// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const signup = () => {
    alert('Signup button clicked');
    // Add actual signup logic here
  };

  const signin = () => {
    alert('Signin button clicked');
    // Add actual signin logic here
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <h1>Welcome to the Application</h1>
      <button className="signup-button" onClick={signup}>Sign Up</button>
      <button className="signin-button" onClick={signin}>Sign In</button>
    </div>
  );
}

export default App;
