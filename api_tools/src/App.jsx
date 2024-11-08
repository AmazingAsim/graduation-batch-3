import './App.css';
import Weather from './components/Weather';
import Trailer from './components/Trailer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Weather />}></Route>
            <Route path='trailer' element={<Trailer />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
