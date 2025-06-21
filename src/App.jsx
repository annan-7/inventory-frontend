import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState();
  const response = async ()=>{
    try {
      const res = await fetch('/api');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log(data);
      setCount(data.count);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setCount("Error loading data");
      
    }
  }
  useEffect(() => {
  
}, []);
if(!count)<div>Loading ...</div>
  return (
   <>
   <div>
    {count.message} 
   </div>
   </>
  )
}

export default App
