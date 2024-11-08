import Dashboard from './components/Dashboard';
import Coin from './components/Coin';
import Rock from './components/Rock';
import Login from './components/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import useToggle from './Hooks/toggle_hook';
import { useState } from 'react';
import { UserContext } from './global/userContext';
function App() {
  let [user,setUser] = useState('Asim sheikh');
  const [isOn,toggle] = useToggle();
  return (
    <div className="App" style={{backgroundColor:isOn?'black':'white',color:isOn?'white':'black'}} >
      <UserContext.Provider value={[user,setUser]}>
      <BrowserRouter>
      {
        isOn ? <button onClick={toggle} >Light mode</button> : <button onClick={toggle}>Dark mode</button>
      }
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='coin' element={<Coin/>}/>
          <Route path='rock' element={<Rock/>}/>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
