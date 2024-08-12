import './App.css'; 
import MainContent from './Components/Header';
import ConnectionLost from './Components/ConnectionLost';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <ConnectionLost />;
  }
  return (
    <>
      <div className="App">
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
