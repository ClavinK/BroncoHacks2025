import './App.css';
import Button from './files/Button';
import Popup from './Popup';
import React, { useState } from 'react';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      {/* <Button /> */}
      <button onClick={() => setIsPopupOpen(true)}>Show Popup</button>
      
      {isPopupOpen && (
        <Popup 
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      
    </div>
    
  );
}

export default App;
