import {React, useEffect, useState} from 'react'

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

  return (
    <>
    {fbiData && console.log(fbiData.items[itemNumber])}
    {fbiData ?
      <>
    <img src = {fbiData.items[itemNumber].images[0].original}></img>
    <p>{fbiData.items[itemNumber].details}</p>
      </>


: null}

    </>
  )
}

export default App