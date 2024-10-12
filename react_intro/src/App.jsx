
import './App.css';
import Edtech from './components/Edtech';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Course from './components/Course';
import Users from './components/Users';
import User from './components/User';
function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='about' element={<About/>}></Route>
               <Route path='edtech' element={<Edtech/>}></Route>
               <Route path='course/:course_name' element={<Course/>}></Route>
               <Route path='users' element={<Users/>}>
                   <Route path='user/:id' element={<User/>}/>
               </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
