import react from 'react'
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto'
import FullName from './component/Profile/FullName';
import Adresse from  './component/Profile/Adresse.js';
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
     <Adresse />
     
    
    </div>
  );
}

export default App;
