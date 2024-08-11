import './App.css'; 
import MainContent from './Components/Header';
import ConnectionLost from './Components/ConnectionLost';
import React, { useState, useEffect } from 'react';

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
      <MainContent />
      </div>
    </>
  )
}

export default App
