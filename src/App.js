import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
