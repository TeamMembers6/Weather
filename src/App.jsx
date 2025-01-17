import { useState } from 'react'

import './App.css'

import Gallery  from './Gallery';
function App() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  let [search,setSearch]= useState('')

  
  let [data,setData] = useState([])
  const submitHandler = e =>{
    e.preventDefault();
    if (search.length){
     
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(res=>res.json())
    .then(response => {   
     
      setData(response.photos.photo)
     
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  setSearch('')
}
else{
  alert("Enter you want images names...")
}
  }
  return (
    <>
      <div className="container">
        <h3>Gallery Snapshot Images</h3>
        <form className="d-flex" onSubmit={submitHandler}>
          <input type="text" value={search} className='form-control' onChange={(e)=>{
            setSearch(e.target.value)
          }}/>
          <input type="button" value="Submit" className='btn btn-primary'onClick={submitHandler}/>
        </form>
        {data.length>=1?<Gallery data={data}/>:<h4 className='m-3'>No Image Loaded</h4>}
      </div>
    </>
  )
}

export default App
