import Dashboard from './components/Dashboard';
import Coin from './components/Coin';
import Rock from './components/Rock';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='coin' element={<Coin/>}/>
          <Route path='rock' element={<Rock/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
