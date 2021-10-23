import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Firsthalf from './components/Firsthalf';
import Secondhalf from './components/Secondhalf';

function App() {
  const [users,setusers]=useState([])
  const [e,sete]=useState('Our Users')
  const [lo,setlo]=useState(false)
  const getusers=()=>{
    setusers([])
    axios.get('https://reqres.in/api/users?page=1')
    .then((data)=>{
      setlo(true)
      console.log("Finding");
      setTimeout(() => {
        setusers(data.data.data)
        setlo(false)  
      }, 2000);
      sete(null)
      console.log("Got it");
    })
    .catch((err)=>{
      console.log("Error");
      sete('Sorry!, There is an Error while Fetching Data')
    })
  }

  return (
    <div>
      <Firsthalf getusers={getusers}/>
      <Secondhalf content={users} e={e} lo={lo}/>
      
    </div>
  );
}

export default App;
