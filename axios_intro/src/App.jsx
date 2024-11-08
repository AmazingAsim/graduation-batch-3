
import './App.css';
import { useState } from 'react';
import useGetData from './hooks/getHook';
import axios from 'axios';
function App() {
  let {data} = useGetData('https://jsonplaceholder.typicode.com/users') || []
  let [name,setName]= useState('');
  let [email,setEmail]= useState('');
  let [phone,setPhone]= useState('');



  async function submit(){
    try {
      let result =await axios.post('https://jsonplaceholder.typicode.com/users',JSON.stringify({
        username:name,
        email:email,
        phone:phone
      }));
      setName('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">

      <div className="container w-50 m-auto">
          <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="tel" className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
          <button className="btn btn-primary my-3" onClick={submit}>Add User</button>
      </div>

      <hr />
        <h1>Users List</h1>
        <div className="container">
           <div className="row">
             {
               data.map(function(user){
                return(
                  <div className='col-sm-4 my-3'>
                     <div className='card p-3'>
                      <h3>{user.username}</h3>
                      <p>{user.email}</p>
                      <small>{user.phone}</small>
                      <button className="btn btn-info">Contact {user.name}</button>
                     </div>
                  </div>
                )
               })
             }
           </div>
        </div>
    </div>
  );
}

export default App;
