import {React, useEffect, useState} from 'react'
import './App.css';
function App() {
  const [page, setPage] = useState(1);
  const [fbiData, setFbiData] = useState();
  const [itemNumber, setItemNumber] = useState(0);

  const fetchData = async(page) => { 
  
  const response = await fetch(`https://api.fbi.gov/wanted/v1/list?page=${page}`);
  const data = await response.json(); 
  setFbiData(data);
  }

  useEffect(() =>{
    fetchData(page);
  },[])

  const moreSuspects = () => { 
    let randomNum = Math.floor(Math.random() * 20);
    setPage(randomNum);
    setItemNumber(randomNum);
    
  }

  return (
    <>
    {fbiData && console.log(fbiData)}
    {fbiData ?
      <div className='center'>
      <h3>Wanted!</h3>
    <img src = {fbiData.items[itemNumber].images[0].original ? fbiData.items[itemNumber].images[0].original : <>test</> }></img>
    <p>{fbiData.items[itemNumber].description ?fbiData.items[itemNumber].description : fbiData.items[itemNumber].details  }</p>
    <p>{fbiData.items[itemNumber].title}</p>
      <button type = "button" onClick={moreSuspects}>More</button>
      </div>


: null}

    </>
  )
}

export default App